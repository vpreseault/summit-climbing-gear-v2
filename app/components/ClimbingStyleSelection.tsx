import React from "react";
import Image from "next/image";
import "../globals.css";
import Link from "next/link";

const ClimbingStyleSection = () => {
  return (
    <section className="climbing-style-section">
      <h2>Choose Your Climbing Style</h2>
      <div className="cards-container">
        <div className="card">
          <div className="card-image">
            <Image
              src="/./sport-climbing.webp"
              alt="Sport Climbing: A Dynamic Climbing Discipline"
              width={600}
              height={150}
            />
          </div>
          <div className="card-content">
            <h3>Sport Climbing: A Dynamic Climbing Discipline</h3>
            <Link className="learn-more-button" href="/sport-climbing">
              Learn More &gt;
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <Image
              src="/./trad-climbing.jpg"
              alt="Traditional Climbing: A Timeless Climbing Discipline"
              width={600}
              height={150}
            />
          </div>
          <div className="card-content">
            <h3>Traditional Climbing: A Timeless Climbing Discipline</h3>
            <Link className="learn-more-button" href="/trad-climbing">
              Learn More &gt;
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <Image
              src="/./bouldering.avif"
              alt="Bouldering 101: Everything You Need to Know to Get Started"
              width={600}
              height={150}
            />
          </div>
          <div className="card-content">
            <h3>Bouldering 101: Everything You Need to Know to Get Started</h3>
            <Link className="learn-more-button" href="/bouldering">
              Learn More &gt;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClimbingStyleSection;
