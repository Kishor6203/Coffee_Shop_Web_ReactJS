import React, { useEffect, useRef, useState } from "react";
import "./Testimonials.css";

const reviews = [
  {
    id: 1,
    name: "Aarav Sharma",
    rating: 5,
    text: "The cappuccino is exceptional. Beautiful latte art, perfectly balanced espresso, and such a relaxing atmosphere.",
    date: "2 weeks ago",
    initials: "AS",
    verified: true,
  },
  {
    id: 2,
    name: "Priya Verma",
    rating: 4,
    text: "One of my favourite places to work. The cold brew is smooth, the staff are lovely, and the ambience is exactly right.",
    date: "1 month ago",
    initials: "PV",
    verified: true,
  },
  {
    id: 3,
    name: "Rahul Mehta",
    rating: 5,
    text: "Their espresso is pure perfection. You can genuinely taste the quality of the beans in every cup.",
    date: "3 weeks ago",
    initials: "RM",
    verified: true,
  },
  {
    id: 4,
    name: "Sneha Iyer",
    rating: 5,
    text: "Love everything about this café. Great coffee, friendly people, beautiful interiors and consistently good service.",
    date: "2 months ago",
    initials: "SI",
    verified: true,
  },
  {
    id: 5,
    name: "Kabir Nair",
    rating: 5,
    text: "The flat white is fantastic. FoodiePlace has quickly become my go-to spot whenever I need good coffee.",
    date: "3 weeks ago",
    initials: "KN",
    verified: true,
  },
  {
    id: 6,
    name: "Meera Kapoor",
    rating: 5,
    text: "Such a warm experience from start to finish. The coffee feels carefully made and the pastries are excellent.",
    date: "1 month ago",
    initials: "MK",
    verified: true,
  },
];

const ratingDistribution = [
  { stars: 5, percentage: 86 },
  { stars: 4, percentage: 10 },
  { stars: 3, percentage: 3 },
  { stars: 2, percentage: 1 },
  { stars: 1, percentage: 0 },
];

const renderStars = (rating) => {
  return Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      className={
        index < rating
          ? "star filled"
          : "star empty"
      }
      aria-hidden="true"
    >
      ★
    </span>
  ));
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const sliderRef = useRef(null);

  const visibleReviews = 3;

  const maxIndex = Math.max(
    0,
    reviews.length - visibleReviews
  );

  const nextReview = () => {
    setActiveIndex((current) =>
      current >= maxIndex
        ? 0
        : current + 1
    );
  };

  const previousReview = () => {
    setActiveIndex((current) =>
      current <= 0
        ? maxIndex
        : current - 1
    );
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextReview();
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  useEffect(() => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;

    const card = slider.querySelector(
      ".review-card"
    );

    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = 18;

    slider.scrollTo({
      left:
        activeIndex *
        (cardWidth + gap),
      behavior: "smooth",
    });
  }, [activeIndex]);

  return (
    <section
      className="testimonials"
      id="testimonials"
      aria-labelledby="testimonials-title"
    >
      <div className="testimonials-container">

        {/* ==================================================
            HEADER
        ================================================== */}

        <header className="testimonials-header">

          <div className="testimonial-eyebrow">
            <span className="eyebrow-line" />
            <span>Guest experiences</span>
          </div>

          <div className="testimonial-heading-row">

            <div>
              <h2 id="testimonials-title">
                Loved by people
                <br />
                who <em>love coffee.</em>
              </h2>
            </div>

            <p>
              We believe the best measure of a café
              isn't just what's in the cup — it's how
              people feel when they leave.
            </p>

          </div>

        </header>


        {/* ==================================================
            RATING SUMMARY
        ================================================== */}

        <div className="rating-summary">

          <div className="overall-rating">

            <div className="rating-number">
              4.8
            </div>

            <div className="rating-stars">
              {renderStars(5)}
            </div>

            <p>
              Based on 1,200+ reviews
            </p>

          </div>


          <div className="rating-divider" />


          <div className="rating-breakdown">

            {ratingDistribution.map((item) => (
              <div
                className="rating-row"
                key={item.stars}
              >

                <span className="rating-label">
                  {item.stars}
                  <span className="mini-star">
                    ★
                  </span>
                </span>

                <div className="rating-bar">
                  <span
                    style={{
                      width: `${item.percentage}%`,
                    }}
                  />
                </div>

                <span className="rating-percentage">
                  {item.percentage}%
                </span>

              </div>
            ))}

          </div>


          <div className="rating-trust">

            <span className="trust-icon">
              ✓
            </span>

            <div>
              <strong>
                Verified reviews
              </strong>

              <span>
                From real café visits
              </span>
            </div>

          </div>

        </div>


        {/* ==================================================
            REVIEW SLIDER
        ================================================== */}

        <div
          className="reviews-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >

          <div
            className="review-grid"
            ref={sliderRef}
            aria-live="polite"
          >

            {reviews.map((review) => (
              <article
                className="review-card"
                key={review.id}
              >

                {/* Card top */}

                <div className="review-top">

                  <div className="review-stars">
                    {renderStars(
                      review.rating
                    )}
                  </div>

                  <span className="quote-mark">
                    “
                  </span>

                </div>


                {/* Review */}

                <p className="review-text">
                  {review.text}
                </p>


                {/* Customer */}

                <div className="review-author">

                  <div className="review-avatar">
                    {review.initials}
                  </div>

                  <div className="review-author-info">

                    <h3>
                      {review.name}
                    </h3>

                    <div className="review-meta">

                      {review.verified && (
                        <span className="verified">
                          <span>✓</span>
                          Verified customer
                        </span>
                      )}

                      <span className="review-date">
                        {review.date}
                      </span>

                    </div>

                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>


        {/* ==================================================
            CONTROLS
        ================================================== */}

        <div className="testimonial-controls">

          <div className="slider-dots">

            {Array.from(
              { length: maxIndex + 1 },
              (_, index) => (
                <button
                  key={index}
                  type="button"
                  className={
                    index === activeIndex
                      ? "slider-dot active"
                      : "slider-dot"
                  }
                  onClick={() =>
                    setActiveIndex(index)
                  }
                  aria-label={`Show review group ${
                    index + 1
                  }`}
                  aria-current={
                    index === activeIndex
                      ? "true"
                      : undefined
                  }
                />
              )
            )}

          </div>


          <div className="slider-arrows">

            <button
              type="button"
              className="slider-arrow"
              onClick={previousReview}
              aria-label="Previous reviews"
            >
              ←
            </button>

            <button
              type="button"
              className="slider-arrow"
              onClick={nextReview}
              aria-label="Next reviews"
            >
              →
            </button>

          </div>

        </div>


        {/* ==================================================
            BOTTOM CTA
        ================================================== */}

        <div className="review-cta">

          <div className="cta-copy">

            <span>
              Your experience matters
            </span>

            <h3>
              Had a great cup?
              <br />
              <em>Tell someone about it.</em>
            </h3>

          </div>

          <a
            href="#location"
            className="review-cta-button"
          >
            <span>
              Leave a review
            </span>

            <span
              aria-hidden="true"
            >
              ↗
            </span>
          </a>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
