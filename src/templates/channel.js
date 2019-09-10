import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import DisplayLevel from "../components/displayLevel"

const Channel = ({ pageContext, data }) => {
  const { channel } = pageContext
  const { nodes, totalCount } = data.allGoogleSheetMasterRow
  const channelHeader = `${totalCount} video${
    totalCount === 1 ? "" : "s"
  } for "${channel}" YouTube channel `

  return (
    <Layout>
      <main className="px-6 md:px-8">
        <h1 className="mb-4 text-xl font-bold">{channelHeader}</h1>
        <div className="flex -mx-3 flex-wrap">
          {nodes.map(video => {
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
                        <DisplayLevel level={video.level} />
                      </div>
                      <div className="inline-block px-2 py-1 text-sm font-medium text-accent-3 mr-2">
                        <Link to={`/tag/${video.tag}`}>{video.tag}</Link>
                      </div>
                    </div>
                    <div className="px-4 py-1 mb-2">
                      <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-medium text-gray-700 hover:bg-accent-3 hover:text-white">
                        <Link to={`/duration/${video.duration}`}>
                          {video.duration} min
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </main>
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
      }
      totalCount
    }
  }
`
