import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

const Channel = ({ pageContext, data }) => {
  const { channel } = pageContext
  const { nodes, totalCount } = data.allGoogleSheetMasterRow
  const channelHeader = `${totalCount} video${
    totalCount === 1 ? "" : "s"
  } for channel "${channel}"`

  return (
    <Layout>
      <main>
        <div>
          <h1>{channelHeader}</h1>
          <ul>
            {nodes.map(video => {
              return (
                <li key={video.title}>
                  <Link to={video.title}>{video.title}</Link>
                </li>
              )
            })}
          </ul>
          {/*
              This links to a page that does not yet exist.
              We'll come back to it!
            */}
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
      }
      totalCount
    }
  }
`
