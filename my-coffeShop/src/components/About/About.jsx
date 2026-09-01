import React from "react";
import "./About.css";

const About = () => {
  return (
    <section
      className="about"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="about-container">

        {/* Image */}
        <div className="about-visual">

          <div className="about-image-wrap">
            <img
              className="about-image"
              src="https://images.ctfassets.net/27hc2gu70btq/4HKXtmwmMoJo5CeHV4R706/0266ad24d7ad232a02ca85f6818f9dab/CC_HomePage_OurStory_Secondary_696x512.jpg?w=696&h=512&q=100&fm=webp"
              alt="Barista preparing freshly brewed coffee at FoodiePlace Café"
              loading="lazy"
              decoding="async"
            />

            <div
              className="about-image-overlay"
              aria-hidden="true"
            />
          </div>

          {/* Image badge */}
          <div className="about-badge">
            <span className="about-badge-number">01</span>

            <span className="about-badge-divider" />

            <span className="about-badge-label">
              Our story
            </span>
          </div>

          {/* Image caption */}
          <div className="about-image-caption">
            <span>Thoughtfully made</span>
            <span className="caption-dot">•</span>
            <span>Warmly served</span>
          </div>

        </div>


        {/* Content */}
        <div className="about-content">

          {/* Eyebrow */}
          <div className="about-eyebrow">
            <span className="about-eyebrow-line" />
            <span>More than coffee</span>
          </div>


          {/* Heading */}
          <h2
            id="about-title"
            className="about-title"
          >
            A little place
            <br />
            <em>with a lot of heart.</em>
          </h2>


          {/* Intro */}
          <p className="about-lead">
            We believe the best cafés are more than places
            to grab a coffee. They are places where mornings
            begin slowly, conversations last longer, and
            ordinary moments become memorable.
          </p>


          {/* Story */}
          <div className="about-story">

            <p>
              FoodiePlace began with a simple idea: create
              genuinely good coffee and pair it with the kind
              of hospitality that makes people want to return.
            </p>

            <p>
              From carefully selected beans to freshly prepared
              food, every detail matters. Our coffee is crafted
              with patience, our food is made with care, and
              our space is designed to feel effortlessly welcoming.
            </p>

          </div>


          {/* Values */}
          <div className="about-values">

            <article className="about-value">
              <span className="about-value-number">
                01
              </span>

              <div>
                <h3>
                  Thoughtfully sourced
                </h3>

                <p>
                  Quality beans selected for character,
                  balance and consistency.
                </p>
              </div>
            </article>


            <article className="about-value">
              <span className="about-value-number">
                02
              </span>

              <div>
                <h3>
                  Crafted with care
                </h3>

                <p>
                  Every cup is prepared with patience,
                  precision and attention to detail.
                </p>
              </div>
            </article>


            <article className="about-value">
              <span className="about-value-number">
                03
              </span>

              <div>
                <h3>
                  Made for people
                </h3>

                <p>
                  A welcoming space built around comfort,
                  connection and everyday moments.
                </p>
              </div>
            </article>

          </div>


          {/* CTA */}
          <div className="about-footer">

            <a
              href="#menu"
              className="about-button"
            >
              <span>Discover our menu</span>

              <span
                className="about-button-icon"
                aria-hidden="true"
              >
                ↗
              </span>
            </a>

            <span className="about-signature">
              Brewed with intention.
            </span>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
