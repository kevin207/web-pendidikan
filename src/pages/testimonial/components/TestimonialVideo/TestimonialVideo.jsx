import React from "react";
import "./testimonialvideo.css";
import { Fade } from "react-awesome-reveal";

import VID from "../../../../assets/testimoni-video/Thabita Gladys Damopoli.mp4";

const TestimonialVideo = () => {
  return (
    <Fade>
      <div className="testimonial-video-wrap">
        <div className="testimonial-video-left">
          <div className="testimonial-video-left-brand">Logo Brain.co</div>
          <div className="testimonial-video-left-name">Thabita Gladys Damopoli</div>
          <div className="testimonial-video-left-quote">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, sequi? Consectetur quae sapiente illum provident. Ducimus quam sint, quae possimus consequuntur, aliquam sit aliquid atque perferendis similique nulla! Labore,
            ad?
          </div>
        </div>
        <div className="testimonial-video-right">
          <video playsInline controls="true" className="testimonial-video">
            <source src={VID} type="video/mp4" />
          </video>
        </div>
      </div>
    </Fade>
  );
};

export default TestimonialVideo;
