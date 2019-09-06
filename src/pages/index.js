import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

import { graphql } from "gatsby"

const IndexPage = props => {
  const videos = props.data.allGoogleSheetMasterRow.nodes
  return (
    <>
      <SEO title="Home" />

      <div className="min-h-screen flex flex-col">
        <header className="bg-accent-3 border-accent-2 border-b p-4 mb-6">
          <h1>
            <Link
              className="text-2xl font-extrabold hover:text-accent-4"
              to={`/`}
            >
            Yoga Library
              {/* {title} */}
            </Link>
          </h1>
        </header>
        <main className="flex -mx-1 flex-wrap max-w-5xl px-4 md:px-8">
          {videos.map(video => {
            return (
                <div
                  key={video.poseid}
                  className="w-1/3 px-3 p-4 rounded overflow-hidden hover:text-blue-700 shadow-lg"
                >
                  <a href={video.url} target="_blank">
                    <img
                      className="w-full"
                      src={video.thumbnail}
                      alt="Sunset in the mountains"
                    />
                    <div className="px-6 py-2">
                      <div className="font-bold text-xl mb-1">
                        {video.title}
                      </div>
                    </div>
                  </a>
                  <div className="px-6 py-1">
                    <div className="inline-block px-3 py-1 text-xl font-semibold text-green-700 mr-2">
                      {video.level}
                    </div>
                    <div className="inline-block px-3 py-1 text-sm font-semibold text-red-700 mr-2">
                      {video.length} min
                    </div>
                  </div>
                  <div className="px-6 py-1">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      {video.channel}
                    </span>
                  </div>
                </div>
            )
          })}
        </main>
          <Link to="/page-2/" className="flex">Go to page 2</Link>
        <footer className="bg-accent-2 border-accent-2 border-t pb-10 pt-6 mt-6 flex flex-col items-center">
          <div className="mb-4 font-semibold">
            <a className="hover:text-accent-4" href="https://github.com/CelineChole/" target="_blank">
            {/* Build and designed by {author} • {new Date().getFullYear()} • itineranturweb.com */}
            </a>
          </div>
          <div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query videos {
    allGoogleSheetMasterRow {
      nodes {
        poseid
        level
        channel
        length
        title
        url
        thumbnail
      }
    }
  }
`
