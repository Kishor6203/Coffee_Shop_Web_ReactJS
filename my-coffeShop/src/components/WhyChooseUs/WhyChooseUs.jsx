import React from "react";
import "./WhyChooseUs.css";

const features = [
  {
    id: "01",
    eyebrow: "THE CRAFT",
    title: "Specialty Coffee Craftsmanship",
    description:
      "Every cup is prepared with precision by trained baristas who understand extraction, texture, temperature, and balance.",
    icon: "☕",
  },
  {
    id: "02",
    eyebrow: "THE SOURCE",
    title: "Premium Ethically Sourced Beans",
    description:
      "We partner with trusted coffee producers and select beans for their exceptional quality, character, and traceability.",
    icon: "🌱",
  },
  {
    id: "03",
    eyebrow: "THE ROAST",
    title: "Freshly Roasted Excellence",
    description:
      "Small-batch roasting helps preserve the natural aroma, sweetness, and distinctive personality of every bean.",
    icon: "🔥",
  },
  {
    id: "04",
    eyebrow: "THE SPACE",
    title: "A Café Made for Moments",
    description:
      "A warm, thoughtfully designed space where you can work quietly, catch up with friends, or simply slow down.",
    icon: "✦",
  },
  {
    id: "05",
    eyebrow: "THE PEOPLE",
    title: "Warm Hospitality",
    description:
      "From the first hello to the final sip, our team is here to make every visit welcoming, personal, and memorable.",
    icon: "◌",
  },
  {
    id: "06",
    eyebrow: "THE FUTURE",
    title: "A More Sustainable Cup",
    description:
      "We continuously look for thoughtful ways to reduce waste, source responsibly, and make better choices for our planet.",
    icon: "◎",
  },
];

const WhyChooseUs = () => {
  const handleExplore = () => {
    const menuSection = document.getElementById("menu");

    if (menuSection) {
      menuSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      className="why"
      id="why"
      aria-labelledby="why-title"
    >
      <div className="why-container">

        {/* ================================
            HEADER
        ================================= */}

        <header className="why-header">

          <div className="why-kicker">
            <span className="kicker-line" />
            <span>Why FoodiePlace</span>
          </div>

          <div className="why-heading">

            <div className="heading-main">
              <span className="heading-number">
                06
              </span>

              <h2 id="why-title">
                More than coffee.
                <br />
                <em>A reason to return.</em>
              </h2>
            </div>

            <div className="heading-copy">
              <p>
                We care about everything behind the cup —
                from where our beans come from to how
                you feel when you leave.
              </p>

              <button
                type="button"
                className="why-explore-btn"
                onClick={handleExplore}
              >
                <span>Explore our menu</span>
                <span className="why-arrow">
                  →
                </span>
              </button>
            </div>

          </div>

        </header>


        {/* ================================
            FEATURED QUALITY STRIP
        ================================= */}

        <div className="quality-strip">

          <div className="quality-item">
            <span className="quality-icon">
              ◉
            </span>

            <div>
              <strong>Specialty Grade</strong>
              <span>Carefully selected beans</span>
            </div>
          </div>


          <span className="quality-divider" />


          <div className="quality-item">
            <span className="quality-icon">
              ✦
            </span>

            <div>
              <strong>Small Batch</strong>
              <span>Freshness in every roast</span>
            </div>
          </div>


          <span className="quality-divider" />


          <div className="quality-item">
            <span className="quality-icon">
              ♡
            </span>

            <div>
              <strong>Made With Care</strong>
              <span>Hospitality at our heart</span>
            </div>
          </div>

        </div>


        {/* ================================
            FEATURE GRID
        ================================= */}

        <div className="why-grid">

          {features.map((feature, index) => (
            <article
              className={`why-card ${
                index === 0
                  ? "why-card-featured"
                  : ""
              }`}
              key={feature.id}
            >

              {/* Decorative number */}
              <span
                className="card-number"
                aria-hidden="true"
              >
                {feature.id}
              </span>


              <div className="card-top">

                <span className="card-eyebrow">
                  {feature.eyebrow}
                </span>

                <div
                  className="card-icon"
                  aria-hidden="true"
                >
                  {feature.icon}
                </div>

              </div>


              <div className="card-content">

                <h3>
                  {feature.title}
                </h3>

                <p>
                  {feature.description}
                </p>

              </div>


              <div className="card-bottom">

                <span>
                  FoodiePlace standard
                </span>

                <span
                  className="card-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>

              </div>

            </article>
          ))}

        </div>


        {/* ================================
            BOTTOM STATEMENT
        ================================= */}

        <div className="why-bottom">

          <div className="bottom-mark">
            FP
          </div>

          <p>
            <strong>
              Good coffee is never just one thing.
            </strong>{" "}
            It is the bean, the roast, the hands behind
            the cup, the room around you, and the people
            you share it with.
          </p>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;