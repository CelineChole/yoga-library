import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

const Duration = ({ pageContext, data }) => {
  const { duration } = pageContext
  const { nodes, totalCount } = data.allGoogleSheetMasterRow
  const durationHeader = `${totalCount} video${
    totalCount === 1 ? "" : "s"
  } for duration "${duration}"`

  return (
    <Layout>
      <main>
        <div>
          <h1>{durationHeader}</h1>
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
          <Link to="/durations">All durations</Link>
        </div>
      </main>
    </Layout>
  )
}

export default Duration

export const pageQuery = graphql`
  query($duration: Int) {
    allGoogleSheetMasterRow(filter: {duration: {eq: $duration}}) {
      nodes {
        title
      }
      totalCount
    }
  }
`
