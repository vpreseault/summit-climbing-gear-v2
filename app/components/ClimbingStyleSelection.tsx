import React from "react";
import "../globals.css";

const ClimbingStyleSection = () => {
  return (
    <section className="climbing-style-section">
      <h2>Choose Your Climbing Style</h2>
      <div className="cards-container">
        <div className="card">
          <div className="card-image">IMAGE</div>
          <div className="card-content">
            <h3>Blog Post Title</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button className="learn-more-button">Learn More &gt;</button>
          </div>
        </div>
        <div className="card">
          <div className="card-image">IMAGE</div>
          <div className="card-content">
            <h3>Blog Post Title</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button className="learn-more-button">Learn More &gt;</button>
          </div>
        </div>
        <div className="card">
          <div className="card-image">IMAGE</div>
          <div className="card-content">
            <h3>Blog Post Title</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button className="learn-more-button">Learn More &gt;</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClimbingStyleSection;
