import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { graphql } from "gatsby"

const IndexPage = (props) => {
  const videos = props.data.allGoogleSheetMasterRow.nodes
  return (

  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <div>{videos[0].level}</div>
    <p className="bg-red-500">Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
  )
  }

export default IndexPage

export const query = graphql`
query videos {
  allGoogleSheetMasterRow {
    nodes {
      poseid
      level
      url
    }
  }
}
`