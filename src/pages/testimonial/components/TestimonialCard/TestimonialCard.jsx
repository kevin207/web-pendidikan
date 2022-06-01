import React from "react";
import "./testimonialcard.css";
import { Fade } from "react-awesome-reveal";

import { AiOutlineInstagram } from "react-icons/ai";
import AVA from "../../../../assets/avatar.jpg";

const TestimonialCard = () => {
  return (
    <Fade>
      <div className="testimonial-card-wrap">
        <div className="testimonial-card-head">
          <div className="testimonial-card-head-text">
            <h5 className="testimonial-card-name">Pipit Nizaria</h5>
            <p className="testimonial-card-status">Mahasiswa</p>

            <div className="testimonial-social">
              <AiOutlineInstagram className="testimonial-social-icon" />
              <small className="testimonial-social-name">@studentbrainco</small>
            </div>
          </div>
          <img src={AVA} alt="avatar testimonial" className="avatar-img" />
        </div>
        <div className="testimonial-card-content">
          <p className="testimonial-content-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab possimus excepturi accusantium consectetur natus in, odit nemo! Eius numquam et nemo earum ad, omnis mollitia at esse voluptatem explicabo vitae.
          </p>
        </div>
      </div>
    </Fade>
  );
};

export default TestimonialCard;
