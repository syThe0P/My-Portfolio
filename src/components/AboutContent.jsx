import "./AboutContent.css"
import React from 'react'
import { Link } from "react-router-dom"
import React1 from "../assets/react1.jpg"
import React2 from "../assets/react2.webp"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I am a react Developer. I create responsive secure website's for my clients.</p>
            <Link to="/contact" >
                <button className="btn">CONTACT</button>
            </Link>
        </div>
        <div className="right">
            <div className="image-container">
                <div className="img-stack top">
                    <img src={React1} alt="true" className="img" />
                </div>
                <div className="img-stack bottom">
                    <img src={React2} alt="true" className="img" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent
