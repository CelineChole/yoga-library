import React, { useState } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { SortFilters } from "../components/SortFilters"
import sortList from "../utilities/sortList"
import { VideoCard } from "../components/VideoCard"

const Channel = ({ pageContext, data }) => {
  const { channel } = pageContext
  const { nodes, totalCount } = data.allGoogleSheetMasterRow
  const channelHeader = `${totalCount} video${
    totalCount === 1 ? "" : "s"
  } for "${channel}" YouTube channel `

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
          hidden="channel"
        />
        <div className="px-6 md:px-8">
          <h1 className="mb-4 text-xl font-bold">{channelHeader}</h1>
          <div className="flex -mx-3 flex-wrap">
            {sortedList.map(video => {
              return (
                <div
                  key={video.poseid}
                  className="flex flex-wrap md:w-1/4 xl:w-1/8 px-2 my-4 md:px-3"
                >
                  <VideoCard video={video} hidden="channel" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Channel

export const pageQuery = graphql`
  query($channel: String) {
    allGoogleSheetMasterRow(filter: { channel: { eq: $channel } }) {
      nodes {
        title
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
