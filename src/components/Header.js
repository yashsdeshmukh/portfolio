import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h2>
              Hi, I'm {data.name}{" "}
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h2>
            <div className="image-wrapper">
            <img src={data.displayPicture} alt="about" width={200}>
            </img>
          </div>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                {data.headerTagline[0]
                  ? data.headerTagline[0]
                  : "Building digital"}
              </h1>
              <h1>
                {" "}
                {data.headerTagline[1]
                  ? data.headerTagline[1]
                  : "products, brands"}
              </h1>
              <h1>
                {" "}
                {data.headerTagline[2]
                  ? data.headerTagline[2]
                  : "and experience"}
              </h1>
            </div>
          </Fade>
          <Fade bottom>
            <p className = "headerPara">{data.headerParagraph}</p>
          </Fade>
          <Fade bottom>
            <a
              href={`mailto:${
                data.contactEmail ? data.contactEmail : "ydeshmukh0093@gmail..com"
              }`}
              className="primary-btn"
            >
              EMAIL ME
            </a>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
