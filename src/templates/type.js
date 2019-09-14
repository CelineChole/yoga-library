import React, { useState } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { SortFilters } from "../components/SortFilters"
import sortList from "../utilities/sortList"
import { VideoCard } from "../components/VideoCard"

const Type = ({ pageContext, data }) => {
  const { type } = pageContext
  const { nodes, totalCount } = data.allGoogleSheetMasterRow
  const typeHeader = `${totalCount} video${
    totalCount === 1 ? "" : "s"
  } for ${type} type`

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
        />
        <div className="px-6 md:px-8">
          <h1 className="mb-4 text-xl font-bold">{typeHeader}</h1>
          <div className="flex -mx-3 flex-wrap">
            {sortedList.map(video => {
              return (
                <div
                  key={video.poseid}
                  className="flex flex-wrap md:w-1/4 xl:w-1/8 px-2 my-4 md:px-3"
                >
                  <VideoCard video={video} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Type

export const pageQuery = graphql`
  query($type: String) {
    allGoogleSheetMasterRow(filter: { yogatype: { eq: $type } }) {
      nodes {
        title
        channel
        url
        tag
        thumbnail
        duration
        level
        poseid
        fields {
          tags
        }
      }
      totalCount
    }
  }
`
