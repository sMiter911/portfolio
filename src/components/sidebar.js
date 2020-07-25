import React from "react"
import { Link } from "gatsby"
import avatar from "../images/avatar.jpeg"

// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faLinkedin, faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons"

export default function Sidebar() {
  return (
   <div>
       {/* Side navigation */}
      <div className="sidenav">
        <div className="avatar-text">
          <img src={avatar} alt="avatar" className="avatar" />
          <h2>Wandu</h2>
        </div>
        <div className="side-nav-links">
          <Link to="/">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/">Projects</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/">Contact</Link>
        </div>
        <div className="twitter-button">
            <button className="follow-btn"><FontAwesomeIcon icon={faTwitter} ></FontAwesomeIcon>Follow @smitter911</button>
        </div>
        <ul className="social-media">
            <a href="https://github.com/sMiter911" target="_blank"  rel="noreferrer"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
            <a href="https://www.linkedin.com/in/wandumuzi-mathunjwa-4132a237/" target="_blank"  rel="noreferrer"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
            <a href="https://twitter.com/smiter911" target="_blank"  rel="noreferrer"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
            <a href="https://www.facebook.com/WanduMathunjwa" target="_blank"  rel="noreferrer"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
        </ul>
        <p className="copyright">&copy;Copyright 2020</p>
      </div>
   </div>
  )
}
