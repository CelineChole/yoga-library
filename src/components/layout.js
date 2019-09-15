// /**
//  * Layout component that queries for data
//  * with Gatsby's useStaticQuery component
//  *
//  * See: https://www.gatsbyjs.org/docs/use-static-query/
//  */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

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

  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-accent-3 border-accent-2 border-b p-3 mb-6">
        <div className="flex items-center">
          <div className="flex-grow">
            <h1 className="text-2xl md:text-3xl text-gray-200 font-bold ml-4">
              <Link to={`/`} className="hover:font-extrabold">
                {title}
              </Link>
            </h1>
          </div>
          <div className="block lg:hidden">
            <button onClick = {() => setIsExpanded(!isExpanded)} className="flex items-center px-3 py-2 border rounded text-gray-300 hover:text-white hover:border-white">
              <svg
              className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className="hidden lg:block">
            <div className="text-lg text-gray-200 mr-2">
              <Link className="hover:font-semibold mr-5" to="/filters">Filters</Link>
            
              <Link className="hover:font-semibold" to="/about">About</Link>
            </div>
          </div>
        </div>
        <div className={`${ isExpanded ? `block` : `hidden` } w-full block flex-grow lg:hidden`}>
        <div className="text-sm lg:flex-grow">
          <Link to="/filters" href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
            Filters
          </Link>
          <Link to="/about" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
            About
          </Link>
        </div>
      </div>
      </header>
      <main className="flex-1 flex max-w-6xl mx-auto">{children}</main>
      <footer className="bg-accent-3 text-gray-200 border-accent-2 border-t py-6 mt-4 flex flex-col items-center">
        <div className="px-12 flex felx-wrap">
          <div className="text-center">
            Built and designed by{" "}
            <a
              href="https://celinechole.com/"
              className="italic hover:font-semibold"
              target="_blank"
            >
              {author}
            </a>{" "}
            • {new Date().getFullYear()} •{" "}
            <Link to="/" className="italic hover:font-semibold">
              yogilibrary.com
            </Link>
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
