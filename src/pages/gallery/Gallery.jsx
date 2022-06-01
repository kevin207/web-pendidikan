import React from "react";
import "./gallery.css";
import { Fade } from "react-awesome-reveal";

import Carousel from "react-bootstrap/Carousel";

const Gallery = () => {
  return (
    <Fade>
      <section className="gallery-section">
        <div className="gallery-item">
          <Carousel>
            <Carousel.Item>
              <div className="media-title">Photo Gallery</div>
              <div className="media-wrap">
                <Fade delay={300} triggerOnce>
                  <img
                    className="media-img"
                    src="https://media.istockphoto.com/photos/happy-black-elementary-student-and-his-teacher-giving-high-five-at-picture-id1334049837?b=1&k=20&m=1334049837&s=170667a&w=0&h=QSdJ4ia-0EXQd6OIseu8ZK0YjG9YTS73bqKqGg1ixsI="
                    alt="brain.co gallery"
                  />

                  <img
                    className="media-img"
                    src="https://media.istockphoto.com/photos/happy-black-elementary-student-and-his-teacher-giving-high-five-at-picture-id1334049837?b=1&k=20&m=1334049837&s=170667a&w=0&h=QSdJ4ia-0EXQd6OIseu8ZK0YjG9YTS73bqKqGg1ixsI="
                    alt="brain.co gallery"
                  />

                  <img
                    className="media-img"
                    src="https://media.istockphoto.com/photos/happy-black-elementary-student-and-his-teacher-giving-high-five-at-picture-id1334049837?b=1&k=20&m=1334049837&s=170667a&w=0&h=QSdJ4ia-0EXQd6OIseu8ZK0YjG9YTS73bqKqGg1ixsI="
                    alt="brain.co gallery"
                  />

                  <img
                    className="media-img"
                    src="https://media.istockphoto.com/photos/happy-black-elementary-student-and-his-teacher-giving-high-five-at-picture-id1334049837?b=1&k=20&m=1334049837&s=170667a&w=0&h=QSdJ4ia-0EXQd6OIseu8ZK0YjG9YTS73bqKqGg1ixsI="
                    alt="brain.co gallery"
                  />

                  <img
                    className="media-img"
                    src="https://media.istockphoto.com/photos/happy-black-elementary-student-and-his-teacher-giving-high-five-at-picture-id1334049837?b=1&k=20&m=1334049837&s=170667a&w=0&h=QSdJ4ia-0EXQd6OIseu8ZK0YjG9YTS73bqKqGg1ixsI="
                    alt="brain.co gallery"
                  />

                  <img
                    className="media-img"
                    src="https://media.istockphoto.com/photos/happy-black-elementary-student-and-his-teacher-giving-high-five-at-picture-id1334049837?b=1&k=20&m=1334049837&s=170667a&w=0&h=QSdJ4ia-0EXQd6OIseu8ZK0YjG9YTS73bqKqGg1ixsI="
                    alt="brain.co gallery"
                  />
                </Fade>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="media-title">Video Gallery</div>
              <div className="media-wrap">
                <Fade delay={300} triggerOnce>
                  <img
                    className="media-img"
                    src="https://media.istockphoto.com/photos/happy-black-elementary-student-and-his-teacher-giving-high-five-at-picture-id1334049837?b=1&k=20&m=1334049837&s=170667a&w=0&h=QSdJ4ia-0EXQd6OIseu8ZK0YjG9YTS73bqKqGg1ixsI="
                    alt="brain.co gallery"
                  />

                  <img
                    className="media-img"
                    src="https://media.istockphoto.com/photos/happy-black-elementary-student-and-his-teacher-giving-high-five-at-picture-id1334049837?b=1&k=20&m=1334049837&s=170667a&w=0&h=QSdJ4ia-0EXQd6OIseu8ZK0YjG9YTS73bqKqGg1ixsI="
                    alt="brain.co gallery"
                  />

                  <img
                    className="media-img"
                    src="https://media.istockphoto.com/photos/happy-black-elementary-student-and-his-teacher-giving-high-five-at-picture-id1334049837?b=1&k=20&m=1334049837&s=170667a&w=0&h=QSdJ4ia-0EXQd6OIseu8ZK0YjG9YTS73bqKqGg1ixsI="
                    alt="brain.co gallery"
                  />

                  <img
                    className="media-img"
                    src="https://media.istockphoto.com/photos/happy-black-elementary-student-and-his-teacher-giving-high-five-at-picture-id1334049837?b=1&k=20&m=1334049837&s=170667a&w=0&h=QSdJ4ia-0EXQd6OIseu8ZK0YjG9YTS73bqKqGg1ixsI="
                    alt="brain.co gallery"
                  />

                  <img
                    className="media-img"
                    src="https://media.istockphoto.com/photos/happy-black-elementary-student-and-his-teacher-giving-high-five-at-picture-id1334049837?b=1&k=20&m=1334049837&s=170667a&w=0&h=QSdJ4ia-0EXQd6OIseu8ZK0YjG9YTS73bqKqGg1ixsI="
                    alt="brain.co gallery"
                  />

                  <img
                    className="media-img"
                    src="https://media.istockphoto.com/photos/happy-black-elementary-student-and-his-teacher-giving-high-five-at-picture-id1334049837?b=1&k=20&m=1334049837&s=170667a&w=0&h=QSdJ4ia-0EXQd6OIseu8ZK0YjG9YTS73bqKqGg1ixsI="
                    alt="brain.co gallery"
                  />
                </Fade>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    </Fade>
  );
};

export default Gallery;
