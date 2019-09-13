import React, { useState } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { SortFilters } from "../components/SortFilters"
import sortList from "../utilities/sortList"
import { VideoCard } from "../components/VideoCard"
import DisplayLevel from "./displayLevel"

const Level = ({ pageContext, data }) => {
  const { level } = pageContext
  const { nodes, totalCount } = data.allGoogleSheetMasterRow
  const levelHeader = (
    <div>
      {`${totalCount} video${totalCount === 1 ? "" : "s"} of `}
      <DisplayLevel level={level} />
    </div>
  )

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
          hidden="level"
        />
        <div className="px-6 md:px-8">
          <h1 className="mb-4 text-xl font-bold">{levelHeader}</h1>
          <div className="flex -mx-2 flex-wrap">
            {sortedList.map(video => {
              return (
                <div
                  key={video.poseId}
                  className="flex flex-wrap md:w-1/4 xl:w-1/8 px-2 my-4 md:px-3"
                >
                  <VideoCard video={video} hidden="level" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Level

export const pageQuery = graphql`
  query($level: Int) {
    allGoogleSheetMasterRow(filter: { level: { eq: $level } }) {
      nodes {
        title
        url
        thumbnail
        channel
        duration
        level
        tag
        poseid
      }
      totalCount
    }
  }
`
