import React from "react";
import Diagram from "../../../components/Headers/icons/diagamdraw.png";

function aboutUs() {
  return (
    <section className="section section-center">
      <div class="title">
        <span></span>
        <h2>A MERN Stack Application</h2>
        <span></span>
      </div>

      <img src={Diagram} alt="" />
    </section>
  );
}

export default aboutUs;
