import React from "react";
import "./Chef.css";

const Chef = () => {
  return (
    <section
      className="chef"
      id="chef"
      aria-labelledby="chef-title"
    >
      <div className="chef-container">

        {/* ==================================================
            SECTION INTRO
        ================================================== */}

        <div className="chef-intro">

          <div className="chef-eyebrow">
            <span className="chef-eyebrow-line" />
            <span>The people behind the experience</span>
          </div>

          <div className="chef-heading-row">

            <h2
              id="chef-title"
              className="chef-title"
            >
              Meet the
              <br />
              <em>craft behind</em>
              <br />
              every cup.
            </h2>

            <p className="chef-intro-text">
              Great coffee starts with great people. Meet the
              passionate mind bringing together carefully
              sourced beans, thoughtful technique and a love
              for hospitality.
            </p>

          </div>

        </div>


        {/* ==================================================
            MAIN PROFILE
        ================================================== */}

        <div className="chef-profile">

          {/* IMAGE */}
          <div className="chef-visual">

            <div className="chef-image-wrap">

              <img
                src="https://png.pngtree.com/thumb_back/fh260/background/20250408/pngtree-a-happy-businessman-is-sitting-in-cafe-drinking-coffee-and-watching-image_17164561.jpg"
                alt="Chef Arjun Menon enjoying coffee at the café"
                className="chef-image"
                loading="lazy"
                decoding="async"
              />

              <div
                className="chef-image-overlay"
                aria-hidden="true"
              />

            </div>


            {/* Image label */}

            <div className="chef-image-label">
              <span className="chef-image-number">
                01
              </span>

              <span className="chef-image-divider" />

              <span>
                The craft behind the cup
              </span>
            </div>

          </div>


          {/* CONTENT */}

          <div className="chef-content">

            <div className="chef-content-top">

              <span className="chef-role">
                Founder · Head of Coffee
              </span>

              <h3>
                Arjun Menon
              </h3>

              <p className="chef-lead">
                A lifelong student of coffee, Arjun believes
                the best cup is the result of great ingredients,
                careful technique and a genuine desire to make
                someone's day a little better.
              </p>

            </div>


            {/* Story */}

            <div className="chef-story">

              <p>
                With more than 12 years in specialty coffee
                and café cuisine, Arjun has built his approach
                around one simple principle: never stop refining
                the craft.
              </p>

              <p>
                From selecting beans and developing recipes to
                training the team behind the bar, he is involved
                in every detail that shapes the FoodiePlace
                experience.
              </p>

            </div>


            {/* Stats */}

            <div className="chef-stats">

              <div className="chef-stat">
                <strong>12+</strong>
                <span>Years of experience</span>
              </div>

              <div className="chef-stat">
                <strong>50K+</strong>
                <span>Cups crafted</span>
              </div>

              <div className="chef-stat">
                <strong>4.9</strong>
                <span>Guest rating</span>
              </div>

            </div>


            {/* Signature / quote */}

            <blockquote className="chef-quote">
              <span className="chef-quote-mark">
                “
              </span>

              <p>
                Coffee should never feel rushed. Give it
                time, give it care, and let the ingredients
                speak for themselves.
              </p>

              <footer>
                — Arjun Menon
              </footer>
            </blockquote>

          </div>

        </div>


        {/* ==================================================
            BOTTOM VALUES
        ================================================== */}

        <div className="chef-values">

          <div className="chef-value">
            <span>01</span>

            <div>
              <h4>Origin first</h4>
              <p>
                We care about where every bean begins.
              </p>
            </div>
          </div>


          <div className="chef-value">
            <span>02</span>

            <div>
              <h4>Precision always</h4>
              <p>
                Small details make a remarkable difference.
              </p>
            </div>
          </div>


          <div className="chef-value">
            <span>03</span>

            <div>
              <h4>People matter</h4>
              <p>
                Hospitality is at the heart of everything.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Chef;
