import React from "react";
import Layout from "../components/layout";

const About = props => {
  return (
    <Layout>
      <main className="p-8 md:px-12">
        <div className="flex flex-wrap -mx-6">
          <div className="md:w-1/2 px-6">
            <img src="https://cdn.pixabay.com/photo/2017/08/01/00/43/people-2562357_1280.jpg" />
          </div>
          <div className="md:w-1/2 pt-6 md:pt-0 px-6">
            <div className="text-2xl mb-12">Yogi Library is my collection of YouTube videos to practice yoga.</div>
            <div className="text-lg">Videos can be viewed by YouTube channel, duration and tags.</div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default About