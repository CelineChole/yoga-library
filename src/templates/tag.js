import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

const Tag = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { nodes, totalCount } = data.allGoogleSheetMasterRow
  const tagHeader = `${totalCount} video${
    totalCount === 1 ? "" : "s"
  } of ${tag}`

  return (
    <Layout>
      <main className="px-6 md:px-8">
        <div>
          <h1 className="mb-4 text-xl font-bold">{tagHeader}</h1>
          <ul>
            {nodes.map(video => {
              return (
                <li key={video.title}>
                  <Link to={video.url}>{video.title}</Link>
                </li>
              )
            })}
          </ul>
          <Link to="/tag">All tags</Link>
        </div>
      </main>
    </Layout>
  )
}

export default Tag

export const pageQuery = graphql`
  query($tag: String) {
    allGoogleSheetMasterRow(filter: {tag: {eq: $tag}}) {
      nodes {
        title
        url
      }
      totalCount
    }
  }
`
