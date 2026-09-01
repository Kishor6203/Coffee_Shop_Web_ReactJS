import React, { useMemo } from "react";
import "./VisitUs.css";

const Visit = () => {
  const phoneNumber = "+919876543210";

  const address =
    "FoodiePlace Café, MG Road, Bengaluru, Karnataka, India";

  const directionsUrl = useMemo(() => {
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      address
    )}`;
  }, []);

  const handleDirections = () => {
    window.open(
      directionsUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(address);
    } catch {
      // Clipboard can be unavailable depending on browser permissions.
    }
  };

  return (
    <section
      className="visit"
      id="visit"
      aria-labelledby="visit-title"
    >
      <div className="visit-container">

        {/* =========================================
            HEADER
        ========================================== */}

        <header className="visit-header">

          <div className="visit-kicker">
            <span className="visit-line" />
            <span>Find Your Way To Us</span>
          </div>

          <div className="visit-heading">

            <div>
              <h2 id="visit-title">
                Come by for
                <br />
                <em>coffee & conversation.</em>
              </h2>
            </div>

            <p>
              Whether you're starting your morning,
              meeting someone special, or simply need
              a quiet corner — we'd love to have you.
            </p>

          </div>

        </header>


        {/* =========================================
            MAIN LOCATION EXPERIENCE
        ========================================== */}

        <div className="visit-layout">

          {/* =======================================
              INFORMATION PANEL
          ======================================== */}

          <div className="visit-info">

            <div className="visit-intro">
              <span className="intro-number">
                01
              </span>

              <div>
                <span className="intro-label">
                  Our café
                </span>

                <h3>
                  FoodiePlace
                  <br />
                  <em>MG Road</em>
                </h3>
              </div>
            </div>


            {/* ADDRESS */}

            <div className="visit-detail">

              <div className="detail-icon">
                <span>⌖</span>
              </div>

              <div className="detail-content">

                <span className="detail-label">
                  Visit us
                </span>

                <p>
                  FoodiePlace Café,
                  <br />
                  MG Road, Bengaluru,
                  <br />
                  Karnataka, India
                </p>

                <button
                  type="button"
                  className="text-action"
                  onClick={handleCopyAddress}
                >
                  Copy address
                  <span>↗</span>
                </button>

              </div>

            </div>


            {/* OPENING HOURS */}

            <div className="visit-detail">

              <div className="detail-icon">
                <span>◷</span>
              </div>

              <div className="detail-content">

                <span className="detail-label">
                  Opening hours
                </span>

                <div className="hours">

                  <div className="hours-row">
                    <span>
                      Monday – Sunday
                    </span>

                    <strong>
                      8:00 AM – 10:00 PM
                    </strong>
                  </div>

                  <div className="hours-row holiday">
                    <span>
                      Public Holidays
                    </span>

                    <strong>
                      9:00 AM – 9:00 PM
                    </strong>
                  </div>

                </div>

              </div>

            </div>


            {/* CONTACT */}

            <div className="visit-detail">

              <div className="detail-icon">
                <span>⌕</span>
              </div>

              <div className="detail-content">

                <span className="detail-label">
                  Contact
                </span>

                <button
                  type="button"
                  className="phone-link"
                  onClick={handleCall}
                >
                  +91 98765 43210
                </button>

                <span className="contact-note">
                  Tap to call the café
                </span>

              </div>

            </div>


            {/* AMENITIES */}

            <div className="amenities">

              <span className="amenity">
                <i>✓</i>
                Free parking
              </span>

              <span className="amenity">
                <i>✓</i>
                Wi-Fi
              </span>

              <span className="amenity">
                <i>✓</i>
                Indoor seating
              </span>

            </div>


            {/* ACTIONS */}

            <div className="visit-actions">

              <button
                type="button"
                className="directions-btn"
                onClick={handleDirections}
              >
                <span>
                  Get directions
                </span>

                <span className="action-arrow">
                  →
                </span>
              </button>

              <button
                type="button"
                className="call-btn"
                onClick={handleCall}
                aria-label="Call FoodiePlace Café"
              >
                ☎
              </button>

            </div>

          </div>


          {/* =======================================
              MAP
          ======================================== */}

          <div className="visit-map-wrapper">

            <div className="map-topbar">

              <div className="map-status">

                <span className="status-dot" />

                <span>
                  FoodiePlace Café
                </span>

              </div>

              <span className="map-location">
                Bengaluru
              </span>

            </div>


            <div className="visit-map">

              <iframe
                title="FoodiePlace Café location on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31104.73879897263!2d77.72145924553114!3d12.965942162153778!2m3!1f0!2f0!3d0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11f35d0dfc83%3A0x30cfa512d80115f9!2sWhitefield%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1775986912731!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="map-card">

                <div className="map-pin">
                  ☕
                </div>

                <div>
                  <strong>
                    FoodiePlace Café
                  </strong>

                  <span>
                    MG Road, Bengaluru
                  </span>
                </div>

              </div>

            </div>


            <div className="map-footer">

              <span>
                Open daily · 8 AM – 10 PM
              </span>

              <button
                type="button"
                onClick={handleDirections}
              >
                Open in Maps ↗
              </button>

            </div>

          </div>

        </div>


        {/* =========================================
            BOTTOM MESSAGE
        ========================================== */}

        <div className="visit-bottom">

          <span className="bottom-mark">
            FP
          </span>

          <p>
            <strong>
              Your table is waiting.
            </strong>{" "}
            Come in, get comfortable, and let us
            take care of the coffee.
          </p>

        </div>

      </div>
    </section>
  );
};

export default Visit;