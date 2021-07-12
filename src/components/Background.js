import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Background = () => {
  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="background-section">
          <div className="content">
              <h1 class="Heading">Background</h1>
              <br></br>
              <br></br>
            <h2 class="Designation">
              {data.Designation}
            </h2>
            <h5 class="Company">
              {data.Company}
            </h5>
            <p class="backgroundPara">
            {data.backgroundPara1}
            <br></br>
            <br></br>
            {data.backgroundPara2}
            <br></br>
            <br></br>
            {data.backgroundPara3}
            <br></br>
            </p>
          </div>
          <div className="image-wrapper">
            <img src={data.aboutImage} alt="about" width={350}>
              
            </img>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Background
