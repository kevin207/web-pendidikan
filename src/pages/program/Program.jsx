import React, { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import "./program.css";

import ProgramCard from "./component/ProgramCard";
import HEAD from "../../assets/program-header.jpg";

const Program = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fade triggerOnce>
      <section className="program-section">
        <img src={HEAD} alt="header-program" className="program-banner" />
        <h1 className="program-banner-text">Apa Aja Sih Program yang Tersedia di Brain.co ??</h1>

        <div className="program-container">
          <Fade direction="down" triggerOnce delay={200}>
            <h2 className="program-container-title">Program Yang Kami Miliki</h2>
          </Fade>
          <Fade direction="left" triggerOnce delay={700}>
            <ProgramCard />
          </Fade>
          <Fade direction="right" triggerOnce>
            <ProgramCard />
          </Fade>
          <Fade direction="left" triggerOnce>
            <ProgramCard />
          </Fade>
          <Fade direction="right" triggerOnce>
            <ProgramCard />
          </Fade>
          <Fade direction="left" triggerOnce>
            <ProgramCard />
          </Fade>
          <Fade direction="right" triggerOnce>
            <ProgramCard />
          </Fade>
          <Fade direction="left" triggerOnce>
            <ProgramCard />
          </Fade>
          <Fade direction="right" triggerOnce>
            <ProgramCard />
          </Fade>
        </div>
      </section>
    </Fade>
  );
};

export default Program;
