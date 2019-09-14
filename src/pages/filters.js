import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"

const Filters = props => {
  const tags = props.data.tags.distinct
  const channels = props.data.channels.distinct
  const durations = props.data.duration.distinct
  const types = props.data.yogatype.distinct

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
      <main className="px-6 md:px-8 max-w-4xl mx-auto lg:flex">
        <div className="lg:w-1/2">
          <div className="py-2 md:px-2 md:p-4">
            <h1 className="text-xl text-center font-semibold py-2">Tags</h1>
            <div className="flex flex-wrap justify-center">
              {tags.map(tag => {
                return <Button name={tag} type="tag" key={tag} />
              })}
            </div>
          </div>
          <div className="py-2 md:p-4 md:px-2">
            <h1 className="text-xl text-center font-semibold py-2">
              YouTube Channels
            </h1>
            <div className="flex flex-wrap justify-center">
              {channels.map(channel => {
                return <Button name={channel} type="channel" key={channel} />
              })}
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="py-2 md:p-4 md:px-2">
            <h1 className="text-xl text-center font-semibold py-2">Duration</h1>
            <div className="flex flex-wrap justify-center">
              {durations
                .sort((a, b) => parseInt(a) - parseInt(b))
                .map(duration => {
                  return (
                    <Button
                      name={duration}
                      type="duration"
                      customLabel={`${duration} min`}
                      key={duration}
                    />
                  )
                })}
            </div>
          </div>
          <div className="py-2 md:p-4 md:px-2">
            <h1 className="text-xl text-center font-semibold py-2">Types</h1>
            <div className="flex flex-wrap justify-center">
              {types.map(type => {
                return <Button name={type} type="type" key={type} />
              })}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Filters

export const data = graphql`
  query allFiltersQuery {
    channels: allGoogleSheetMasterRow(sort: { fields: channel }) {
      distinct(field: channel)
    }
    tags: allGoogleSheetMasterRow {
      distinct(field: fields___tags)
    }
    duration: allGoogleSheetMasterRow(sort: { fields: duration }) {
      distinct(field: duration)
    }
    yogatype: allGoogleSheetMasterRow(sort: { fields: yogatype }) {
      distinct(field: yogatype)
    }
    language: allGoogleSheetMasterRow(sort: { fields: language }) {
      distinct(field: language)
    }
  }
`
