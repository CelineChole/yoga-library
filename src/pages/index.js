import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import DisplayLevel from "../components/displayLevel"
import sortList from "../utilities/sortList"

import SEO from "../components/seo"

import { graphql } from "gatsby"
import { SortFilters } from "../components/SortFilters";

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
                <div
                  key={video.poseid}
                  className="md:w-1/2 relative lg:w-1/3 px-3 my-4"
                >
                  <div className="flex flex-col h-full rounded overflow-hidden hover:text-accent-3 shadow-lg hover:bg-gray-100">
                    <a href={video.url} target="_blank">
                      <img
                        className="w-full"
                        src={video.thumbnail}
                        alt={video.title}
                      />
                      <div className="px-6 py-2">
                        <div className="font-bold text-gray-700 text-lg mb-1">
                          {video.title}
                        </div>
                      </div>
                    </a>
                    <div className="flex flex-1 flex-col justify-end">
                      <div className="flex-0 px-6 py-1">
                        <div className="inline-block px-3 py-1 text-xl mr-2">
                          <Link to={`/level/${video.level}`}>
                            <DisplayLevel level={video.level} />
                          </Link>
                        </div>
                        <div className="inline-block px-3 py-1 text-sm font-semibold rounded bg-gray-200 hover:bg-accent-3 hover:text-white text-accent-2 mr-2">
                          <Link to={`/duration/${video.duration}`}>
                            {video.duration} min
                          </Link>
                        </div>
                        <div className="inline-block px-3 py-1 rounded text-sm font-semibold hover:bg-accent-3 hover:text-white text-accent-2 mr-2">
                          <Link to={`/tag/${video.tag}`}>{video.tag}</Link>
                        </div>
                      </div>
                      <div className="px-6 py-1 mb-2">
                        <span className="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-accent-3 hover:text-white">
                          <Link to={`/channel/${video.channel}`}>
                            📺 {video.channel}
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

