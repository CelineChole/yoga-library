import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import DisplayLevel from "../components/displayLevel"

const Level = ({ pageContext, data }) => {
  const { level } = pageContext
  const { nodes, totalCount } = data.allGoogleSheetMasterRow
  const levelHeader = (
    <div>{`${totalCount} video${
    totalCount === 1 ? "" : "s"
  } of `}
      <DisplayLevel level={level} />
    </div>
  )

  return (
    <Layout>
      <main className="px-6 md:px-8">
        <h1 className="mb-4 text-xl font-bold">{levelHeader}</h1>
        <div className="flex -mx-2 flex-wrap">
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
      </main>
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
        level
        tag
        poseid
      }
      totalCount
    }
  }
`
