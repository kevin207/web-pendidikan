import React from "react";

import { BsYoutube, BsFacebook } from "react-icons/bs";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="footer-wrap">
      <div className="top-footer">
        <div className="top-left">
          <div className="footer-title">Title Number 1</div>
          <small className="footer-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas labore earum, eaque facere ipsum perspiciatis?</small>
        </div>
        <div className="top-right">
          <div className="footer-title">Title Number 2</div>
          <small className="footer-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem tempora, sapiente ratione facere impedit unde?</small>
        </div>
      </div>
      <div className="middle-footer">
        <RiWhatsappFill className="footer-icon-ri whatsapp" />
        <BsFacebook className="footer-icon facebook" />
        <BsYoutube className="footer-icon youtube" />
        <RiInstagramFill className="footer-icon-ri instagram  " />
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 160 1440 140">
        <path
          fill="#123c4a "
          fill-opacity="1"
          d="M0,288L60,277.3C120,267,240,245,360,245.3C480,245,600,267,720,277.3C840,288,960,288,1080,266.7C1200,245,1320,203,1380,181.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <div className="bottom-footer">Copyright © 2022 | PT. Fateh Bersama Maju</div>
    </div>
  );
};

export default Footer;
