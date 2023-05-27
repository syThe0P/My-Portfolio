import "./FooterStyle.css";
import React from "react";
import { FaHome, FaPhone, FaMailBulk,  } from "react-icons/fa";
import { BsGithub, BsLinkedin, BsInstagram, } from "react-icons/bs";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>19B Dwarka, New Delhi</p>
              <p>India</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91-9560474070
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              official.pranavkumar@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
            <div className="social">
            <BsGithub
                size={40}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <BsLinkedin
                size={40}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <BsInstagram
                size={40}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <SiLeetcode
                size={40}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <SiGeeksforgeeks
                size={40}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </div>
            <div className="copyright">
            <p>© Pranav Kumar ~ 2023</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
