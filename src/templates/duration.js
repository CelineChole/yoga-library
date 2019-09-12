import React, { useState } from "react"
import Layout from "../components/layout"
import DisplayLevel from "../components/displayLevel"
import { Link, graphql } from "gatsby"
import { SortFilters } from "../components/SortFilters"
import sortList from "../utilities/sortList"

const Duration = ({ pageContext, data }) => {
  const { duration } = pageContext
  const { nodes, totalCount } = data.allGoogleSheetMasterRow
  const durationHeader = `${totalCount} video${
    totalCount === 1 ? "" : "s"
  } of ${duration} minutes`

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
          hidden="duration"
        />
        <div className="px-6 md:px-8">
          <h1 className="mb-4 text-xl font-bold">{durationHeader}</h1>
          <div className="flex -mx-2 flex-wrap">
            {sortedList.map(video => {
              return (
                <div
                  key={video.poseid}
                  className="md:w-1/4 relative lg:w-1/5 xl:w-1/8 px-3 my-4"
                >
                  <div className="flex flex-col h-full rounded overflow-hidden hover:text-accent-3 shadow-lg hover:bg-gray-100">
                    <a href={video.url} target="_blank">
                      <img
                        className="w-full"
                        src={video.thumbnail}
                        alt={video.title}
                      />
                      <div className="px-3 py-2">
                        <div className="font-bold text-sm mb-1">
                          {video.title}
                        </div>
                      </div>
                    </a>
                    <div className="flex flex-1 flex-col justify-end">
                      <div className="flex-0 px-4 py-1">
                        <div className="inline-block px-2 py-1 text-xl mr-2">
                          <Link to={`/level/${video.level}`}>
                            <DisplayLevel level={video.level} />
                          </Link>
                        </div>
                        <div className="inline-block px-2 py-1 text-sm font-medium text-accent-3 mr-2">
                          <Link to={`/tag/${video.tag}`}>{video.tag}</Link>
                        </div>
                      </div>
                      <div className="px-4 py-1 mb-2">
                        <span className="inline-block bg-gray-200 rounded px-2 py-1 text-sm font-medium text-gray-700 hover:bg-accent-3 hover:text-white">
                          <Link to={`/channel/${video.channel}`}>
                            {video.channel}
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Duration

export const pageQuery = graphql`
  query($duration: Int) {
    allGoogleSheetMasterRow(filter: { duration: { eq: $duration } }) {
      nodes {
        title
        url
        thumbnail
        channel
        level
        tag
        poseid
      }
      totalCount
    }
  }
`
