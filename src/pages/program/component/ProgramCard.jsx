import React from "react";
import "./programcard.css";

import IMG from "../../../assets/choice.jpg";

const ProgramCard = () => {
  return (
    <div className="card-container">
      <img src={IMG} alt="iseng" className="program-image" />

      <div className="right-card">
        <h2 className="program-title">Program Title</h2>
        <p className="program-desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quaerat repellendus sapiente cum aperiam in laboriosam nemo. Reiciendis distinctio ullam odio aliquam optio eveniet numquam, laudantium quas odit excepturi laborum
          nulla quibusdam sapiente eum accusantium soluta veritatis omnis! Cumque, ut?
        </p>

        <button className="program-btn">Hubungi Kami</button>
      </div>
    </div>
  );
};

export default ProgramCard;
