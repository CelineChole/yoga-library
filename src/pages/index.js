import React, { useState } from "react"
import Layout from "../components/layout"
import sortList from "../utilities/sortList"

import SEO from "../components/seo"

import { graphql } from "gatsby"
import { SortFilters } from "../components/SortFilters";
import { VideoCard } from "../components/VideoCard"

const IndexPage = props => {
  const videos = props.data.allGoogleSheetMasterRow.nodes

  const [sort, setSort] = useState("level")
  const [sortDescending, setSortDescending] = useState(true)

  const sortedList = sortList(videos, sort, sortDescending)

  return (
    <>
      <SEO title="Home" />
      <Layout>
        <div className="flex flex-col">
          <SortFilters sort={sort} setSort={setSort} sortDescending={sortDescending} setSortDescending={setSortDescending} />
          <div className="flex flex-wrap px-6 md:px-8">
            {sortedList.map(video => {
              return (
                <VideoCard video={video} />
              )
            })}
          </div>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage

export const data = graphql`
  query videos {
    allGoogleSheetMasterRow {
      nodes {
        poseid
        level
        channel
        duration
        title
        url
        yogastyle
        tag
        thumbnail
      }
    }
  }
`

