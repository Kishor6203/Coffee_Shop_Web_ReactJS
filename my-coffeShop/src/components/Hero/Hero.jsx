import React from "react";
import "./Hero.css";
import heroImage from "../../assets/S4.webp";

const Hero = () => {
  return (
    <section
      className="hero"
      id="home"
      aria-labelledby="hero-title"
      style={{
        "--hero-image": `url(${heroImage})`,
      }}
    >
      {/* ==================================================
          BACKGROUND
      =================================================== */}

      <div className="hero__background" aria-hidden="true">
        <div className="hero__image" />
        <div className="hero__overlay" />
        <div className="hero__vignette" />
        <div className="hero__grain" />
      </div>

      {/* ==================================================
          MAIN CONTENT
      =================================================== */}

      <div className="hero__container">

        <div className="hero__content">

          {/* Eyebrow */}

          <div className="hero__eyebrow">
            <span className="hero__eyebrow-line" />

            <span>
              Specialty coffee · fresh food
            </span>
          </div>

          {/* Heading */}

          <h1
            id="hero-title"
            className="hero__title"
          >
            Coffee worth
            <br />
            <span>slowing down for.</span>
          </h1>

          {/* Description */}

          <p className="hero__description">
            Thoughtfully sourced beans, carefully crafted drinks,
            and fresh food served in a space designed for good
            mornings, long conversations, and everything between.
          </p>

          {/* ==================================================
              PRIMARY ACTIONS
          =================================================== */}

          <div className="hero__actions">

            <a
              href="#menu"
              className="hero-btn hero-btn--primary"
            >
              <span>Explore our menu</span>

              <span
                className="hero-btn__icon"
                aria-hidden="true"
              >
                ↗
              </span>
            </a>

            <a
              href="#location"
              className="hero-btn hero-btn--secondary"
            >
              <span
                className="hero-btn__location"
                aria-hidden="true"
              >
                ●
              </span>

              <span>Find us</span>
            </a>

          </div>

          {/* ==================================================
              LOCATION
          =================================================== */}

          <a
            href="#location"
            className="hero-location"
          >
            <span
              className="hero-location__dot"
              aria-hidden="true"
            />

            <span className="hero-location__content">
              <small>Come visit us</small>

              <strong>
                Your neighbourhood coffee place
              </strong>
            </span>

            <span
              className="hero-location__arrow"
              aria-hidden="true"
            >
              →
            </span>
          </a>

        </div>

      </div>

      {/* ==================================================
          BOTTOM INFORMATION
      =================================================== */}

      <div className="hero__bottom">

        {/* Opening status */}

        <div className="hero-status">

          <span
            className="hero-status__dot"
            aria-hidden="true"
          />

          <span className="hero-status__label">
            Open today
          </span>

          <span className="hero-status__separator">
            ·
          </span>

          <span>
            8:00 AM — 10:00 PM
          </span>

        </div>

        {/* Reservation */}

        <a
          href="#reservation"
          className="hero-reservation"
        >
          <span>Reserve a table</span>

          <span
            aria-hidden="true"
          >
            ↗
          </span>
        </a>

      </div>

      {/* ==================================================
          SCROLL INDICATOR
      =================================================== */}

      <a
        href="#menu"
        className="hero-scroll"
        aria-label="Scroll to menu"
      >
        <span className="hero-scroll__text">
          Explore
        </span>

        <span className="hero-scroll__line">
          <span />
        </span>

        <span
          className="hero-scroll__arrow"
          aria-hidden="true"
        >
          ↓
        </span>
      </a>

    </section>
  );
};

export default Hero;
