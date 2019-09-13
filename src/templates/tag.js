import React, { useState } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { SortFilters } from "../components/SortFilters"
import sortList from "../utilities/sortList"
import { VideoCard } from "../components/VideoCard"

const Tag = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { nodes, totalCount } = data.allGoogleSheetMasterRow
  const tagHeader = `${totalCount} video${
    totalCount === 1 ? "" : "s"
  } of ${tag}`

  const videos = nodes

  const [sort, setSort] = useState("level")
  const [sortDescending, setSortDescending] = useState(true)

  const sortedList = sortList(videos, sort, sortDescending)

  return (
    <Layout>
    <div className="flex flex-col">
        <SortFilters
          sort={sort}
          setSort={setSort}
          sortDescending={sortDescending}
          setSortDescending={setSortDescending}
          hidden=""
        />
      <div className="px-6 md:px-8">
        <h1 className="mb-4 text-xl font-bold">{tagHeader}</h1>
        <div className="flex -mx-2 flex-wrap">
          {sortedList.map(video => {
            return (
              <div
                  key={video.poseid}
                  className="flex flex-wrap md:w-1/4 xl:w-1/8 px-2 my-4 md:px-3"
                >
                  <VideoCard video={video} hidden="tag" />
                </div>
            )
          })}
        </div>
      </div>
      </div>
    </Layout>
  )
}

export default Tag

export const pageQuery = graphql`
  query($tag: String) {
    allGoogleSheetMasterRow(filter: { tag: { eq: $tag } }) {
      nodes {
        title
        poseid
        url
        level
        thumbnail
        channel
        duration
      }
      totalCount
    }
  }
`
