import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const About = props => {
  return (
    <Layout>
      <div className="p-4 md:px-12 flex flex-wrap items-center h-auto md:-mx-6">
          <div className="md:w-1/2 px-4 md:px-6 flex-1">
            <img src="https://cdn.pixabay.com/photo/2017/08/01/00/43/people-2562357_1280.jpg" />
          </div>
          <div className="md:w-1/2 pt-6 md:pt-0 px-4 text-gray-700">
            <div className="text-lg md:text-2xl mb-4 md:mb-6">
              Hi! I'm Céline, a yoga enthusiast.
            </div>
            <div className="md:text-lg mb-4 md:mb-6 flex-1">
              <span className="font-semibold italic">
                Yogi Library
              </span>{" "}
              is my collection of YouTube videos to practice yoga.
            </div>
            <div className="md:text-lg">
              Videos can be viewed by YouTube channel, duration and tags. Click on <Link className="text-accent-3 italic hover:font-semibold" to="/filters">filters</Link> to see all the available options.
            </div>
            <div className="md:pt-10 pt-4">
              Built with <a className="italic" href="https://www.gatsbyjs.org/" target="_blank">GatsbyJS</a>.
            </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
