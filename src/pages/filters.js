import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"

const Filters = props => {
  const tags = props.data.tags.distinct
  const channels = props.data.channels.distinct
  const durations = props.data.duration.distinct

  return (
    <Layout>
      <main className="px-6 md:px-8 max-w-3xl mx-auto">
        <div className="py-2 rounded bg-gray-200 px-2 md:p-4">
          <h1 className="text-xl text-center font-semibold py-2">Tags</h1>
          <div className="flex flex-wrap">
            {tags.map(tag => {
              return (
                  <div
                    className="p-2 hover:text-accent-3"
                    key={tag}
                  >
                    <Link to={`/tag/${tag}`}>{tag}</Link>
                  </div>
              )
            })}
          </div>
        </div>
        <div className="py-2 md:p-4 my-3 rounded bg-gray-200 px-2">
          <h1 className="text-xl text-center font-semibold py-2">
            YouTube Channels
          </h1>
          <div className="flex flex-wrap">
            {channels.map(channel => {
              return (
                <div className="p-2 hover:text-accent-3" key={channel}>
                  <Link to={`/channel/${channel}`}>{channel}</Link>
                </div>
              )
            })}
          </div>
        </div>
        <div className="py-2 md:p-4 rounded my-3 bg-gray-200 px-2">
          <h1 className="text-xl text-center font-semibold py-2">Duration</h1>
          <div className="flex flex-wrap">
            {durations.map(duration => {
              return (
                <div className="p-2 hover:text-accent-3" key={duration}>
                  <Link to={`/duration/${duration}`}>{duration} min</Link>
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Filters

export const data = graphql`
  query allFiltersQuery {
    channels: allGoogleSheetMasterRow {
      distinct(field: channel)
    }
    tags: allGoogleSheetMasterRow {
      distinct(field: tag)
    }
    duration: allGoogleSheetMasterRow {
      distinct(field: duration)
    }
  }
`
