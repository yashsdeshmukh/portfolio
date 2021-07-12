import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const About = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="about-container">
          <h1>About</h1>
        </div>
        <div className="about-para">
        <p>
          {data.aboutParaOne}
          <br></br>
          <br></br>
          {data.aboutParaTwo}
          <br></br>
          <br></br>
          {data.aboutParaThree}
        </p>
        </div>
      </div>
    </div>
  )
}

export default About
