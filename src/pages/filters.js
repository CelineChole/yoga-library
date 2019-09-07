import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"

const Filters = props => {
  const tags = props.data.tags.distinct
  const channels = props.data.channels.distinct
  const durations = props.data.duration.distinct

  const Button = ({ name, type, customLabel }) => {
    const label = customLabel || name

    return (
      <div className="m-1">
        <div className="px-3 py-1 text-sm rounded hover:text-white hover:bg-accent-3 bg-gray-200">
          <Link to={`/${type}/${name}`}>{label}</Link>
        </div>
      </div>
    )
  }

  return (
    <Layout>
      <main className="px-6 md:px-8 max-w-2xl mx-auto">
        <div className="py-2 px-2 md:p-4">
          <h1 className="text-xl text-center font-semibold py-2">Tags</h1>
          <div className="flex flex-wrap justify-center">
            {tags.map(tag => {
              return <Button name={tag} type="tag" key={tag} />
            })}
          </div>
        </div>
        <div className="py-2 md:p-4 my-3 px-2">
          <h1 className="text-xl text-center font-semibold py-2">
            YouTube Channels
          </h1>
          <div className="flex flex-wrap justify-center">
            {channels.map(channel => {
              return <Button name={channel} type="channel" key={channel} />
            })}
          </div>
        </div>
        <div className="py-2 md:p-4 my-3 px-2">
          <h1 className="text-xl text-center font-semibold py-2">Duration</h1>
          <div className="flex flex-wrap justify-center">
            {durations.map(duration => {
              return <Button name={duration} type="duration" customLabel={`${duration} min`} key={duration} />
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
    duration: allGoogleSheetMasterRow(sort: { fields: duration }) {
      distinct(field: duration)
    }
  }
`
