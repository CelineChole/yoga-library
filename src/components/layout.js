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
      <header className="bg-accent-3 border-accent-2 border-b p-3 mb-6">
        <div className="flex items-center">
          <div className="flex-grow">
            <h1 className="text-2xl md:text-3xl text-gray-200 font-bold">
              <Link to={`/`} className="hover:font-extrabold">{title}</Link>
            </h1>
          </div>
          <div className="text-lg hover:text-gray-200 hover:font-semibold pr-4">
            <Link to="/about">About</Link>
          </div>
          <div className="text-lg hover:text-gray-200 hover:font-semibold">
            <Link to="/filters">Filters</Link>
          </div>
        </div>
      </header>
      <main className="flex-1 max-w-6xl">{children}</main>
      <footer className="bg-accent-3 text-gray-200 border-accent-2 border-t py-6 mt-4 flex flex-col items-center">
        <div className="px-12 flex felx-wrap">
          <div className="text-center">
            Built and designed by {author} • {new Date().getFullYear()} • ?.com
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
