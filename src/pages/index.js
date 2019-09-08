import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import SEO from "../components/seo"

import { graphql } from "gatsby"

const StateUpdateText = ({ state, setState, value, display }) => {
  const displayText = display || value.slice(0,1).toUpperCase() + value.slice(1)

  return (
    <span
      onClick={() => setState(value)}
      className={state === value ? "underline" : ""}
    >
      {displayText}
    </span>
  )
}

const IndexPage = props => {
  const videos = props.data.allGoogleSheetMasterRow.nodes

  const [sort, setSort] = useState("level")
  const [sortDescending, setSortDescending] = useState(true)

  const sortList = (sortBy, descending) => {
    let sortedList = videos.slice()

    switch (sortBy) {
      case "duration":
        sortedList.sort((a, b) => parseInt(b.duration) - a.duration)
        break

      case "level":
        sortedList.sort((a, b) => b.level.length - a.level.length)
        break

      case "channel":
        sortedList.sort((a, b) => b.channel.localeCompare(a.channel))
        break

      case "style":
        sortedList.sort((a, b) =>
          ("" + b.yogastyle).localeCompare("" + a.yogastyle)
        )
        break

      case "tag":
        sortedList.sort((a, b) => ("" + b.tag).localeCompare("" + a.tag))
        break

      default:
        break
    }

    if (descending) {
      sortedList.reverse()
    }

    return sortedList
  }

  const sortedList = sortList(sort, sortDescending)

  return (
    <>
      <SEO title="Home" />
      <Layout>
        <div className="flex flex-col">
          <section className="flex">
            Sort by
            <StateUpdateText value="level" state={sort} setState={setSort} />
            <StateUpdateText value="duration" state={sort} setState={setSort} />
            <StateUpdateText value="channel" state={sort} setState={setSort} />
            <StateUpdateText value="style" state={sort} setState={setSort} />
            <StateUpdateText value="tag" state={sort} setState={setSort} />
            <div class="ml-8 mb-2">
              <div class="form-switch inline-block align-middle">
                <input
                  type="checkbox"
                  class="form-switch-checkbox"
                  value={sortDescending}
                  id="toggleSortDescending"
                  name="toggleSortDescending"
                  onClick={() => setSortDescending(s => !s)}
                />
                <label
                  class="form-switch-label"
                  for="toggleSortDescending"
                ></label>
              </div>
              <label class="text-xs text-grey-dark" for="toggleSortDescending">
                {sortDescending ? "Descending" : "Ascending"}
              </label>
            </div>
          </section>
          <div className="flex -mx-2 flex-wrap px-6 md:px-8">
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
                          {video.level}
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
