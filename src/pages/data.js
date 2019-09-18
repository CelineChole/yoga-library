import { graphql } from "gatsby"

export const test = graphql`
  query($channel: String, $duration: Int, $level: Int, $tag: String) {
    allGoogleSheetMasterRow(filter: { channel: { eq:$channel }}, { duration: { eq: $duration }}, {level: { eq: $level }}, {fields: {tags: {eq: $tag }}} ) {
      nodes {
        poseid
        url
        title
        thumbnail
        level
        channel
        duration
        yogatype
        fields {
          tags
        }
      }
    }
  }
`