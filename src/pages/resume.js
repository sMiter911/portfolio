import React from "react"
import Jobs from "../components/jobs"
import Schools from "../components/schools"

import Layout from "../components/layout"

const Resume = () => (
  <Layout>
    <div className="resume-intro intro-text">
      <h1>Wandumuzi D. Mathunjwa</h1>
      <p>
        Energetic, eager to learn that is basically rounds up my character, but
        wait there's more...I recognise the need for continuous self-improvement
        and subscribe to that belief wholeheartedly. Hence I carry the{" "}
        <a href="https://onepiece.fandom.com/wiki/Will_of_D." target="_blank"  rel="noreferrer">
          <span>"Will of D"</span>
        </a>{" "}
        with pride...(shamless One piece reference there).
      </p>
      <p>Gamer. Coder. Anime enthusiast...Wandu</p>
      <h4>wandumuzi.m@sysinfo.co.za</h4>
    </div>
    <br></br>
    <div>
      <h2>Experience</h2>
      <Jobs></Jobs>
      <hr></hr>
      <br></br>
      <h2>Education</h2>
      <Schools></Schools>
    </div>
  </Layout>
)

export default Resume
