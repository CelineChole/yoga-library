import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"

const filters = props => {
  const channels = props.data.allGoogleSheetMasterRow.nodes

  let uniqueChannel = new Set()
  uniqueChannel = channels.filter(channel => {
    if (!uniqueChannel.has(channel.channel)) {
      return uniqueChannel.add(channel.channel)
    }
  })

  return (
    <>
      <SEO title="YouTube Channel" />
      <h1>Filter by Channel</h1>
      {uniqueChannel.map(c => {
        return <div key={c.channel}>{c.channel}</div>
      })}
      <Link to="/">Go back to the homepage</Link>
    </>
  )
}

export default filters

export const data = graphql`
  query youtubeChannelQuery {
    allGoogleSheetMasterRow {
      nodes {
        channel
      }
    }
  }
`
