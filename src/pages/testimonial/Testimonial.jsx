import React, { useEffect } from "react";
import "./testimonial.css";
import { Fade } from "react-awesome-reveal";

import Carousel from "react-bootstrap/Carousel";
import TestimonialCard from "./components/TestimonialCard/TestimonialCard";
import TestimonialVideo from "./components/TestimonialVideo/TestimonialVideo";
import IMG from "../../assets/testimonial-header.jpg";

const Testimonial = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fade>
      <section className="testimonial-section">
        <div className="testimonial-container">
          <img src={IMG} alt="testimoni head" className="testimonial-header-img" />

          <div className="testimonial-header">
            <h1 className="testimonial-header-title">
              Cerita & Pengalaman Seru Mereka Selama Belajar Bersama
              <span className="testimonial-brand"> Brain.co</span>
            </h1>
            <h3 className="testimonial-header-text">Banyak kisah dan cerita yang mereka temukan selama belajar dengan Brain.co</h3>
          </div>

          <div className="testimonial-content">
            <Fade triggerOnce delay={200} direction="down">
              <h2 className="testimonial-content-title">Kata Mereka Tentang Kami</h2>
            </Fade>
            <Carousel variant="dark" indicators={false}>
              <Carousel.Item>
                <div className="testimonial-wrap">
                  <TestimonialCard />
                  <TestimonialCard />
                  <TestimonialCard />
                  <TestimonialCard />
                  <TestimonialCard />
                  <TestimonialCard />
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="testimonial-wrap">
                  <TestimonialCard />
                  <TestimonialCard />
                  <TestimonialCard />
                  <TestimonialCard />
                  <TestimonialCard />
                  <TestimonialCard />
                </div>
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="testimonial-content-video">
            <Fade triggerOnce delay={200} direction="down">
              <h2 className="testimonial-content-title">Tonton Pengalaman Seru Mereka Bersama Brain.co, Yuk !</h2>
            </Fade>

            <Carousel variant="dark" interval={null} controls={false}>
              <Carousel.Item>
                <div className="testimonial-wrap-video">
                  <TestimonialVideo />
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="testimonial-wrap-video">
                  <TestimonialVideo />
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="testimonial-wrap-video">
                  <TestimonialVideo />
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default Testimonial;
