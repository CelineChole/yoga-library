// /**
//  * Layout component that queries for data
//  * with Gatsby's useStaticQuery component
//  *
//  * See: https://www.gatsbyjs.org/docs/use-static-query/
//  */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const title = data.site.siteMetadata.title

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-accent-3 border-accent-2 border-b p-4 mb-6">
        <h1 className="inline-block">
          <Link className="text-2xl font-extrabold hover:text-white" to={`/`}>
            {title}
          </Link>
        </h1>
        <div className="inline-block absolute right-0 p-2">
          <Link to="/filters">Filters</Link>
        </div>
      </header>
      {children}
      <footer className="bg-accent-2 border-accent-2 border-t pb-10 pt-6 mt-6 flex flex-col items-center">
        <div className="mb-4 font-semibold">
          <a
            className="hover:text-accent-4"
            href="https://github.com/CelineChole/"
            target="_blank"
          >
            {/* Build and designed by {author} • {new Date().getFullYear()} • itineranturweb.com */}
          </a>
        </div>
        <div></div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
