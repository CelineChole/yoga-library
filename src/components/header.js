import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = props => {
  const siteTitle = data.site
  console.log(data)
  return (
    
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

export const data = graphql`
  query siteInfoQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
