import React from "react"

export const StateUpdateText = ({ state, setState, value, display, hidden }) => {
  console.log('hey', value)
  console.log('hidden', hidden)
  // const blop = value.filter(v => v !== {hidden})
  const displayText =
    display || value.slice(0, 1).toUpperCase() + value.slice(1)
  return (
    <div
      onClick={() => setState(value)}
      className="cursor-pointer inline-block px-3 py-2 my-1 text-sm font-medium rounded bg-gray-200 hover:bg-accent-3 hover:text-white text-accent-2 mr-2"
    >
      <span className={state === value ? "uppercase font-bold" : ""}>
        {displayText}
      </span>
    </div>
  )
}
