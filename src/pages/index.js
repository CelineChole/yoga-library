import React from "react"
import { Link } from "gatsby"
import ChannelVideos from "./channelvideos"

import SEO from "../components/seo"

import { graphql } from "gatsby"

const IndexPage = props => {
  const videos = props.data.allGoogleSheetMasterRow.nodes
  return (
    <>
      <SEO title="Home" />

      <div className="min-h-screen flex flex-col">
        <header className="bg-accent-3 border-accent-2 border-b p-4 mb-6">
          <h1 className="inline-block">
            <Link
              className="text-2xl font-extrabold hover:text-white"
              to={`/`}
            >
              Yogi Library
            </Link>
          </h1>
          <div className="inline-block absolute right-0 p-2">
            <Link to="/filters">Filters</Link>
          </div>
        </header>
        <main className="flex -mx-2 flex-wrap px-6 md:px-8">
          {videos.map(video => {
            return (
              <div
                key={video.poseid}
                className="w-1/1 md:w-1/3 relative lg:w-1/4 px-2 py-2 my-4 rounded overflow-hidden hover:text-accent-3 shadow-lg"
              >
                <a href={video.url} target="_blank">
                  <img
                    className="w-full"
                    src={video.thumbnail}
                    alt="Sunset in the mountains"
                  />
                </a>
                <div className="bg-green-100">

                  <div className="px-6 py-2 bg-blue-200">
                    <div className="font-bold text-xl mb-1">{video.title}</div>
                  </div>
                <div className="bg-red-200 absolute bottom-0">

                <div className="px-6 py-1">
                  <div className="inline-block px-3 py-1 text-xl mr-2">
                    {video.level}
                  </div>
                  <div className="inline-block px-3 py-1 text-sm font-semibold text-accent-2 mr-2">
                    {video.length} min
                  </div>
                  <div className="inline-block px-3 py-1 text-sm font-semibold text-red-700 mr-2">
                    {video.yogastyle}
                  </div>
                </div>
                <div className="px-6 py-1">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    <Link to={`/${video.channel}`}>📺 {video.channel}</Link>
                    {/* <ChannelVideos channel={video.channel} /> */}
                  </span>
                </div>
                </div>
              </div>
                </div>
            )
          })}
        </main>
        <footer className="bg-accent-2 border-accent-2 border-t pb-10 pt-6 mt-6 flex flex-col items-center">
          <div className="mb-4 font-semibold">
            <a
              className="hover:text-accent-4"
              href="https://github.com/CelineChole/"
              target="_blank"
            >
              {/* Build and designed by {author} • {new Date().getFullYear()} • itineranturweb.com */}
            </a>
          </div>
          <div></div>
        </footer>
      </div>
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
        length
        title
        url
        yogastyle
        thumbnail
      }
    }
  }
`
