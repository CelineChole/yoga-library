import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

const Channel = ({ pageContext, data }) => {
  const { channel } = pageContext
  const { nodes, totalCount } = data.allGoogleSheetMasterRow
  const channelHeader = `${totalCount} video${
    totalCount === 1 ? "" : "s"
  } for YouTube channel "${channel}"`

  return (
    <Layout>
      <main className="px-6 md:px-8">
        <div>
          <h1 className="mb-4 text-xl font-bold">{channelHeader}</h1>
          <ul>
            {nodes.map(video => {
              return (
                <li key={video.title}>
                  <a href={video.url} target="_blank">{video.title}</a>
                </li>
              )
            })}
          </ul>
          <Link to="/channels">All Channels</Link>
        </div>
      </main>
    </Layout>
  )
}

export default Channel

export const pageQuery = graphql`
  query($channel: String) {
    allGoogleSheetMasterRow(filter: {channel: {eq: $channel}}) {
      nodes {
        title
        url
      }
      totalCount
    }
  }
`
