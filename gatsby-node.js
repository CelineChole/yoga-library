const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const channelTemplate = path.resolve("src/templates/channel.js")
  const durationTemplate = path.resolve("src/templates/duration.js")
  const tagTemplate = path.resolve("src/templates/tag.js")

  const result = await graphql(`
    {
      channelGroup: allGoogleSheetMasterRow {
        distinct(field: channel)
      }
      durationGroup: allGoogleSheetMasterRow {
        distinct(field: duration)
      }
      tagGroup: allGoogleSheetMasterRow {
        distinct(field: tag)
      }
    }
  `)

  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Extract channels data from query
  const channels = result.data.channelGroup.distinct

  // Make channels pages
  channels.forEach(channel => {
    createPage({
      path: `/channel/${channel}/`,
      component: channelTemplate,
      context: {
        channel: channel,
      },
    })
  })

  // Extract duration data from query
  const durations = result.data.durationGroup.distinct

  // Make duration pages
  durations.forEach(duration => {
    createPage({
      path: `/duration/${duration}/`,
      component: durationTemplate,
      context: {
        duration: parseInt(duration),
      },
    })
  })
  // Extract tag data from query
  const tags = result.data.tagGroup.distinct

  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tag/${tag}/`,
      component: tagTemplate,
      context: {
        tag: tag,
      },
    })
  })
}
