import React from "react"
import workingMan from '../images/man_at_work.png'

export default function Tophalf() {
  return (
    <div className="top-half">
        <div className="intro-text">
        <h1>Hey, I'm Wandu...</h1>
        <p>
          I’m a full stack developer just starting my <span>dev</span> journey
          and continually learning and growing. I like working on new technologies
          as well as refining my knowledge of "legacy systems". Once a COBOL developer
          I now delve into the wild west that is web develment...
        </p>
        </div>
        <div className="illustration">
            <img src={workingMan} alt="illustarion"></img>
        </div>
      </div>
  );
}