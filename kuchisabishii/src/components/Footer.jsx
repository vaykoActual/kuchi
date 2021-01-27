import React from "react";
import { SocialIcon } from "react-social-icons";
import "./HomePage.css";

const Footer = () => (
  <footer className="blockquote-footer">
    <SocialIcon url="https://github.com/vaykoActual" fgColor="white" />
    <cite title="Source Title">Living the Dream in NJ</cite>
    <SocialIcon
      url="https://www.linkedin.com/in/shayne-vaykovich-57530721/"
      fgColor="white"
    />
  </footer>
);

export default Footer;
