import React from "react";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />            {/*icons at the end o fthe page*/}
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualtiy</span>
          <span>Help</span>
          <span>Share</span>                    {/* What does span do?*/}
          <span>Carrers</span>                  {/*Each <span> tag is wrapping a piece of text ("Quality", "Help", "Share"). By default, the text inside each <span> will appear inline with any surrounding content, and there won't be any visual change unless CSS is applied.*/}{/*The <span> tag allows you to selectively apply styles to parts of the text while keeping the content inline, which means it doesn't break the flow of the text like block-level elements (e.g., <div>) would.*/}
          <span>Testimonials</span>
          <span>Work</span>
        </div>
        <div className="footer-section-columns">
          <span>+91-88473-56497</span>
          <span>hello@ProVital.com</span>
          <span>press@ProVital.com</span>
          <span>contact@ProVital.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>©️UKASHA AHMAD-2024</span>
          <span>@Ukasha Ahmad @ukashashere</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
