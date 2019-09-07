import React from "react"
import Layout from "../components/layout"

const About = props => {
  return (
    <Layout>
      <main className="p-4 md:px-12">
        <div className="flex flex-wrap md:-mx-6">
          <div className="md:w-1/2 px-2 md:px-6">
            <img src="https://cdn.pixabay.com/photo/2017/08/01/00/43/people-2562357_1280.jpg" />
          </div>
          <div className="md:w-1/2 pt-6 md:pt-0 px-2 self-center text-gray-700">
            <div className="text-lg md:text-2xl mb-4 md:mb-6">
              Hi! I'm Céline, a yogi enthusiast.
            </div>
            <div className="md:text-lg mb-4 md:mb-6">
              <span className="font-semibold italic text-accent-3">Yogi Library</span> is my collection of YouTube videos to practice yoga.
            </div>
            <div className="md:text-lg">
              Videos can be viewed by YouTube channel, duration and tags. To see all the available filters navigate to filters.
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default About
