const sortList = (videos, sortBy, descending) => {
  let sortedList = videos.slice()

  switch (sortBy) {
    case "duration":
      sortedList.sort((a, b) => parseInt(b.duration) - a.duration)
      break

    case "level":
      sortedList.sort((a, b) => b.level - a.level)
      break

    case "channel":
      sortedList.sort((a, b) => b.channel.localeCompare(a.channel))
      break

    case "style":
      sortedList.sort((a, b) =>
        ("" + b.yogastyle).localeCompare("" + a.yogastyle)
      )
      break

    case "tag":
      sortedList.sort((a, b) => ("" + b.tag).localeCompare("" + a.tag))
      break

    default:
      break
  }

  if (descending) {
    sortedList.reverse()
  }

  return sortedList
}

export default sortList