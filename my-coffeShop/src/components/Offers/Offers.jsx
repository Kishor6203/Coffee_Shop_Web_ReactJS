import React, { useEffect, useMemo, useState } from "react";
import "./Offers.css";

const offers = [
  {
    id: 1,
    type: "Happy Hour",
    icon: "☕",
    title: "Happy Hours",
    description:
      "Slow down and enjoy your favourite handcrafted coffee for less during our afternoon happy hours.",
    discount: "20% OFF",
    timing: "2:00 PM – 5:00 PM",
    code: "HAPPY20",
    accent: "gold",
    availability: "Every Monday – Friday",
  },
  {
    id: 2,
    type: "Combo",
    icon: "🥐",
    title: "Weekend Coffee Combo",
    description:
      "Pair two handcrafted coffees with a freshly baked pastry and turn your weekend into something special.",
    discount: "BEST VALUE",
    timing: "Sat – Sun",
    code: "WEEKEND",
    accent: "cream",
    availability: "This weekend",
  },
  {
    id: 3,
    type: "Students",
    icon: "🎓",
    title: "Student Perks",
    description:
      "Show your valid student ID at checkout and enjoy a little extra motivation for your study sessions.",
    discount: "15% OFF",
    timing: "All day",
    code: "STUDENT15",
    accent: "terracotta",
    availability: "Valid student ID required",
  },
  {
    id: 4,
    type: "Breakfast",
    icon: "🍳",
    title: "Morning Ritual",
    description:
      "Start your morning right with a freshly brewed coffee and buttery croissant at an irresistible price.",
    discount: "₹199",
    timing: "8:00 AM – 11:00 AM",
    code: "MORNING199",
    accent: "brown",
    availability: "Every day",
  },
];

const getTimeRemaining = () => {
  const now = new Date();

  const target = new Date();
  target.setHours(17, 0, 0, 0);

  if (now >= target) {
    target.setDate(target.getDate() + 1);
  }

  const difference = target - now;

  if (difference <= 0) {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    hours: Math.floor(
      difference / (1000 * 60 * 60)
    ),
    minutes: Math.floor(
      (difference / (1000 * 60)) % 60
    ),
    seconds: Math.floor(
      (difference / 1000) % 60
    ),
  };
};

const formatNumber = (number) =>
  String(number).padStart(2, "0");

const Offers = () => {
  const [copiedCode, setCopiedCode] = useState(null);
  const [timeLeft, setTimeLeft] = useState(
    getTimeRemaining()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const countdown = useMemo(
    () => [
      {
        value: timeLeft.hours,
        label: "Hours",
      },
      {
        value: timeLeft.minutes,
        label: "Minutes",
      },
      {
        value: timeLeft.seconds,
        label: "Seconds",
      },
    ],
    [timeLeft]
  );

  const handleCopyCode = async (code) => {
    try {
      await navigator.clipboard.writeText(code);

      setCopiedCode(code);

      setTimeout(() => {
        setCopiedCode(null);
      }, 2200);
    } catch {
      // Clipboard may be unavailable in some browsers.
      setCopiedCode(null);
    }
  };

  const handleClaimOffer = (code) => {
    handleCopyCode(code);

    const orderSection =
      document.getElementById("menu");

    if (orderSection) {
      setTimeout(() => {
        orderSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 250);
    }
  };

  return (
    <section
      className="offers"
      id="offers"
      aria-labelledby="offers-title"
    >
      <div className="offers-container">

        {/* ================================
            HEADER
        ================================= */}

        <header className="offers-header">

          <div className="offers-eyebrow">
            <span className="eyebrow-line" />
            <span>Something special for you</span>
          </div>

          <div className="offers-heading-row">

            <div>
              <h2 id="offers-title">
                Good coffee.
                <br />
                <em>Better moments.</em>
              </h2>
            </div>

            <p>
              From slow mornings to afternoon
              pick-me-ups, enjoy thoughtfully crafted
              offers made for every coffee ritual.
            </p>

          </div>

        </header>


        {/* ================================
            FEATURED OFFER
        ================================= */}

        <div className="featured-offer">

          <div className="featured-copy">

            <span className="featured-label">
              Today's coffee moment
            </span>

            <div className="featured-icon">
              ☕
            </div>

            <h3>
              Happy Hour
              <br />
              <em>starts here.</em>
            </h3>

            <p>
              Take a break from the busy day.
              Enjoy 20% off handcrafted coffee
              between 2 PM and 5 PM.
            </p>

            <div className="featured-details">

              <div>
                <span>Available</span>
                <strong>
                  Mon – Fri
                </strong>
              </div>

              <div>
                <span>Time</span>
                <strong>
                  2 PM – 5 PM
                </strong>
              </div>

            </div>

            <button
              type="button"
              className="featured-button"
              onClick={() =>
                handleClaimOffer("HAPPY20")
              }
            >
              <span>
                {copiedCode === "HAPPY20"
                  ? "Code Copied!"
                  : "Claim 20% Off"}
              </span>

              <span className="button-arrow">
                →
              </span>
            </button>

          </div>


          <div className="featured-visual">

            <div className="coffee-ring ring-one" />
            <div className="coffee-ring ring-two" />

            <div className="coffee-cup">
              <span>☕</span>
            </div>

            <div className="discount-stamp">
              <span>GET</span>
              <strong>20%</strong>
              <span>OFF</span>
            </div>

            <div className="floating-bean bean-one">
              •
            </div>

            <div className="floating-bean bean-two">
              •
            </div>

          </div>

        </div>


        {/* ================================
            COUNTDOWN
        ================================= */}

        <div className="offer-countdown">

          <div className="countdown-copy">

            <span className="countdown-dot" />

            <div>
              <strong>
                Today's offer ends soon
              </strong>

              <span>
                Don't miss your coffee break.
              </span>
            </div>

          </div>


          <div className="countdown-timer">

            {countdown.map((item, index) => (
              <React.Fragment key={item.label}>

                <div className="countdown-unit">

                  <strong>
                    {formatNumber(item.value)}
                  </strong>

                  <span>
                    {item.label}
                  </span>

                </div>

                {index <
                  countdown.length - 1 && (
                  <span className="countdown-separator">
                    :
                  </span>
                )}

              </React.Fragment>
            ))}

          </div>

        </div>


        {/* ================================
            OFFER CARDS
        ================================= */}

        <div className="offers-grid">

          {offers.map((offer) => (
            <article
              className={`offer-card ${offer.accent}`}
              key={offer.id}
            >

              <div className="offer-card-top">

                <span className="offer-type">
                  {offer.type}
                </span>

                <span className="offer-icon">
                  {offer.icon}
                </span>

              </div>


              <div className="offer-discount">
                {offer.discount}
              </div>


              <h3>
                {offer.title}
              </h3>


              <p className="offer-description">
                {offer.description}
              </p>


              <div className="offer-meta">

                <div className="meta-item">

                  <span>
                    When
                  </span>

                  <strong>
                    {offer.timing}
                  </strong>

                </div>

                <div className="meta-item">

                  <span>
                    Availability
                  </span>

                  <strong>
                    {offer.availability}
                  </strong>

                </div>

              </div>


              <div className="offer-bottom">

                <button
                  type="button"
                  className="offer-btn"
                  onClick={() =>
                    handleClaimOffer(
                      offer.code
                    )
                  }
                >
                  <span>
                    {copiedCode === offer.code
                      ? "Copied!"
                      : "Claim Offer"}
                  </span>

                  <span aria-hidden="true">
                    ↗
                  </span>
                </button>

                <button
                  type="button"
                  className="coupon-code"
                  onClick={() =>
                    handleCopyCode(
                      offer.code
                    )
                  }
                  aria-label={`Copy coupon code ${offer.code}`}
                >
                  <span>
                    Code
                  </span>

                  <strong>
                    {offer.code}
                  </strong>

                  <span className="copy-icon">
                    {copiedCode === offer.code
                      ? "✓"
                      : "⧉"}
                  </span>
                </button>

              </div>

            </article>
          ))}

        </div>


        {/* ================================
            TERMS
        ================================= */}

        <div className="offers-footer">

          <span className="footer-icon">
            *
          </span>

          <p>
            Offers are subject to availability.
            Terms may apply. Please mention your
            offer code when ordering.
          </p>

        </div>

      </div>
    </section>
  );
};

export default Offers;
