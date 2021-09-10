import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
            <h1>Contact</h1>
            <h2>{data.contactSubHeading}</h2>
            <h3>Have bigger projects? I have a team of carefullly chosen 4 engineers capable of handling complex projects</h3>
            <p>
            <a className="email-link" href="http://rajmouryaportfolio.herokuapp.com/">Raj Mourya</a>
            &emsp;&emsp;&emsp;&emsp;
            <a className="email-link" href="https://warrenferns.github.io/">Warren Ferns</a>
            &emsp;&emsp;&emsp;&emsp;
            <a className="email-link" href="https://lmath2001.github.io/myportfolio/">Liny Mathew</a>
            </p>
          <p>
          Drop emails at -&nbsp;
          <a className="email-link" href={`mailto:${data.contactEmail}`}>
            { data.contactEmail}
          </a>
          </p>
          
          <div className="social-icons">
            {data.social.map((socialLink, index) => (
              <a
                key={index}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialLink.img} alt="icons"></img>
              </a>
            ))}
          </div>
          <span>
            Made With <icon>❤</icon> by{" "}
            <a>Yash Deshmukh</a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
