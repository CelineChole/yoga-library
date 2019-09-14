import React from "react"
import { Link } from "gatsby"
import DisplayLevel from "./displayLevel"

export const VideoCard = ({ video, hidden = "" }) => {
  const allTags = video.fields.tags || []
  return (
    <div
      key={video.poseid}
      className="flex flex-col h-full rounded overflow-hidden hover:text-accent-3 shadow-lg hover:bg-gray-100"
    >
      <a href={video.url} target="_blank">
        <img className="w-full" src={video.thumbnail} alt={video.title} />
        <div className="px-6 py-2">
          <div className="font-bold text-gray-700 text-lg mb-1">
            {video.title}
          </div>
        </div>
      </a>
      <div className="flex flex-1 flex-col mb-2 justify-end">
        <div className="flex-0 px-6 py-1">
          {hidden !== "level" && (
            <div className="inline-block px-3 py-1 text-xl mr-2">
              <Link to={`/level/${video.level}`}>
                <DisplayLevel level={video.level} />
              </Link>
            </div>
          )}
          {hidden !== "duration" && (
            <div className="inline-block px-3 py-1 text-sm font-semibold rounded bg-gray-200 hover:bg-accent-3 hover:text-white text-accent-2 mr-2">
              <Link to={`/duration/${video.duration}`}>
                {video.duration} min
              </Link>
            </div>
          )}
          <div className="py-1 text-sm font-semibold text-accent-2 mr-1">
            {allTags.map(tag => {
              return (
                <div
                  key={tag}
                  className="m-1 py-1 px-2 rounded hover:bg-accent-3 hover:text-white inline-block"
                >
                  <Link to={`/tag/${tag}`}>{tag}</Link>
                </div>
              )
            })}
          </div>
        </div>
        {hidden !== "channel" && (
          <div className="px-6 py-1">
            <span className="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-accent-3 hover:text-white">
              <Link to={`/channel/${video.channel}`}>📺 {video.channel}</Link>
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
