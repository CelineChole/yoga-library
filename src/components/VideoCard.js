import React from "react"
import { Link } from "gatsby"
import DisplayLevel from "./displayLevel"

export const VideoCard = ({ video, hidden = "" }) => {
  const allTags = video.fields.tags || []
  return (
    <div
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
      <div className="px-6 py-1 flex flex-wrap flex-1 flex-col mb-2 justify-end">
        <div className="flex-0">
          {hidden !== "duration" && (
            <div className="inline-block px-3 py-2 text-sm rounded bg-gray-200 hover:bg-accent-3 hover:text-white text-accent-2 mr-2">
              <Link to={`/duration/${video.duration}`}>
              {video.duration} min
              </Link>
            </div>
          )}
            {allTags.map(tag => {
              return (
                <div
                  key={tag}
                  className="mr-2 my-1 py-2 px-2 text-sm rounded text-accent-2 bg-gray-200 hover:bg-accent-3 hover:text-white inline-block"
                >
                  <Link to={`/tag/${tag}`}>🏷️{tag}</Link>
                </div>
              )
            })}
        </div>
        <div className="flex mt-2">
        {hidden !== "channel" && (
            <div className="bg-gray-200 rounded px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-accent-3 hover:text-white">
              <Link to={`/channel/${video.channel}`}>📺{video.channel}</Link>
            </div>
        )}
        {hidden !== "level" && (
            <div className="py-1 pl-3 text-xl">
              <Link to={`/level/${video.level}`}>
                <DisplayLevel level={video.level} />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
