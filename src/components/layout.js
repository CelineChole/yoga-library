// /**
//  * Layout component that queries for data
//  * with Gatsby's useStaticQuery component
//  *
//  * See: https://www.gatsbyjs.org/docs/use-static-query/
//  */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import about from "../pages/about"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)
  const title = data.site.siteMetadata.title
  const author = data.site.siteMetadata.author

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-accent-3 border-accent-2 border-b p-4 mb-6">
        <h1 className="inline-block">
          <Link className="text-2xl font-extrabold hover:text-white" to={`/`}>
            {title}
          </Link>
        </h1>
        <div className="inline-block absolute right-0 p-2">
          <Link to="/about">About</Link>
        </div>
        <div className="inline-block p-2">
          <Link to="/filters">Filters</Link>
        </div>
      </header>
      <main className="flex-1 max-w-6xl">
          {children}
        </main>
      <footer className="bg-accent-3 text-gray-200 border-accent-2 border-t pb-10 pt-6 mt-6 flex flex-col items-center">
        <div className="px-12 flex felx-wrap">
          <div className="text-center">
        Build and designed by {author} • {new Date().getFullYear()} • ?.com

          </div>
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
