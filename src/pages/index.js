import React, { useState } from "react"
import Layout from "../components/layout"
import sortList from "../utilities/sortList"
import { graphql } from "gatsby"

import SEO from "../components/seo"

import { SortFilters } from "../components/SortFilters"
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
          <SortFilters
            sort={sort}
            setSort={setSort}
            sortDescending={sortDescending}
            setSortDescending={setSortDescending}
          />
          <div className="flex flex-wrap px-6 md:px-8">
            {sortedList.map(video => {
              return (
                <div
                  key={video.poseid}
                  className="md:w-1/2 relative lg:w-1/3 px-3 my-4"
                >
                  <VideoCard video={video} />
                </div>
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
        yogatype
        thumbnail
        fields {
          tags
        }
      }
    }
  }
`

