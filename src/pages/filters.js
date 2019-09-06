import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"

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
      <Layout>
        <main>
          <h1>Filter by Channel</h1>
          {uniqueChannel.map(c => {
            return <div key={c.channel}>{c.channel}</div>
          })}
          <Link to="/">Go back to the homepage</Link>
        </main>
      </Layout>
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
