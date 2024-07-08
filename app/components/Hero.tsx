import React from "react";
import "../globals.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-info">
        <h2>Summit Climbing Gear</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&lsquo;s standard dummy
          text ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged.
        </p>
        <button className="buy-gear-button">Buy Gear</button>
      </div>
      <div className="hero-image">
        <p>Picture of outdoor climber</p>
      </div>
    </section>
  );
};

export default Hero;
