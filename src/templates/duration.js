import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

const Duration = ({ pageContext, data }) => {
  const { duration } = pageContext
  const { nodes, totalCount } = data.allGoogleSheetMasterRow
  const durationHeader = `${totalCount} video${
    totalCount === 1 ? "" : "s"
  } of ${duration} minutes`

  return (
    <Layout>
      <main className="px-6 md:px-8">
        <div>
          <h1 className="mb-4 text-xl font-bold">{durationHeader}</h1>
          <ul>
            {nodes.map(video => {
              return (
                <li key={video.title}>
                  <Link to={video.title}>{video.title}</Link>
                </li>
              )
            })}
          </ul>
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
