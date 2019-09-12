import React from "react"
import { StateUpdateText } from "./StateUpdateText"

export const SortFilters = ({
  sort,
  setSort,
  sortDescending,
  setSortDescending,
  hidden,
}) => {
  return (
    <section className="flex flex-col px-8 md:mb-5">
      <div className="uppercase text-xs text-gray-600">Sort by:</div>
      <div className="flex items-center flex-wrap">
        {hidden !== "level" && (
          <StateUpdateText value="level" state={sort} setState={setSort} />
        )}
        {hidden !== "duration" && (
          <StateUpdateText value="duration" state={sort} setState={setSort} />
        )}
        {hidden !== "channel" && (
          <StateUpdateText value="channel" state={sort} setState={setSort} />
        )}

        <div className="md:ml-3">
          <div className="form-switch inline-block align-middle">
            <input
              type="checkbox"
              className="form-switch-checkbox"
              value={sortDescending}
              id="toggleSortDescending"
              name="toggleSortDescending"
              onClick={() => setSortDescending(s => !s)}
            />
            <label
              className="form-switch-label"
              htmlFor="toggleSortDescending"
            ></label>
          </div>
          <label
            className="text-xs text-grey-dark"
            htmlFor="toggleSortDescending"
          >
            {sortDescending ? "↑" : "↓"}
          </label>
        </div>
      </div>
    </section>
  )
}
