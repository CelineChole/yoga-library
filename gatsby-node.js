const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const channelTemplate = path.resolve("src/templates/channel.js")

  const result = await graphql(`
    {
      channelGroup: allGoogleSheetMasterRow {
        distinct(field: channel)
      }
    }
  `)

  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Extract tag data from query
  const channels = result.data.channelGroup.distinct

  // Make tag pages
  channels.forEach(channel => {
    createPage({
      path: `/channel/${channel}/`,
      component: channelTemplate,
      context: {
        channel: channel,
      },
    })
  })
}