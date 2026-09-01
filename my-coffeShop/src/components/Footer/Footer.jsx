import React, { useState } from "react";
import "./Footer.css";

const quickLinks = [
  { label: "Home", id: null },
  { label: "About Us", id: "about" },
  { label: "Our Menu", id: "menu" },
  { label: "Special Offers", id: "offers" },
  { label: "Why Choose Us", id: "why-us" },
  { label: "Our Chef", id: "chef" },
  { label: "Gallery", id: "gallery" },
  { label: "Contact", id: "contact" },
];

const menuLinks = [
  { label: "Coffee", id: "menu" },
  { label: "Tea & Infusions", id: "menu" },
  { label: "Cold Drinks", id: "menu" },
  { label: "Pastries", id: "menu" },
  { label: "Breakfast", id: "menu" },
  { label: "Seasonal Specials", id: "offers" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14 8h3V4h-3c-3.3 0-5 1.9-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.7.3-1 1-1Z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 4h4.2l3.2 4.4L16.2 4H19l-5.2 6 5.7 10H15.3l-3.5-6-4.4 6H4.6l5.3-6.2L5 4Z" />
      </svg>
    ),
  },
];

function Footer() {
  const [email, setEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* =========================================
     SCROLL TO SECTION
  ========================================= */

  const scrollToSection = (id) => {
    if (!id) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  /* =========================================
     NEWSLETTER
  ========================================= */

  const handleNewsletterSubmit = async (event) => {
    event.preventDefault();

    const cleanEmail = email.trim();

    if (!cleanEmail) {
      setNewsletterStatus("Please enter your email address.");
      return;
    }

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(cleanEmail)) {
      setNewsletterStatus(
        "Please enter a valid email address."
      );
      return;
    }

    setIsSubmitting(true);
    setNewsletterStatus("");

    /*
      Replace this section with your real API call.

      Example:

      await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: cleanEmail,
        }),
      });
    */

    await new Promise((resolve) =>
      setTimeout(resolve, 700)
    );

    setIsSubmitting(false);
    setNewsletterStatus(
      "You're subscribed! Welcome to the Brew & Bean family."
    );

    setEmail("");
  };

  /* =========================================
     BACK TO TOP
  ========================================= */

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="site-footer">

      {/* =====================================
          NEWSLETTER / CTA
      ===================================== */}

      <section className="footer-newsletter">
        <div className="footer-container newsletter-container">

          <div className="newsletter-content">

            <span className="footer-eyebrow">
              STAY IN THE LOOP
            </span>

            <h2>
              Good coffee starts
              <span> with good news.</span>
            </h2>

            <p>
              Get seasonal drinks, exclusive offers,
              café updates and a little coffee
              inspiration delivered to your inbox.
            </p>

          </div>

          <div className="newsletter-form-wrapper">

            <form
              className="newsletter-form"
              onSubmit={handleNewsletterSubmit}
              noValidate
            >

              <label
                htmlFor="footer-email"
                className="sr-only"
              >
                Email address
              </label>

              <input
                id="footer-email"
                type="email"
                name="email"
                placeholder="Your email address"
                autoComplete="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setNewsletterStatus("");
                }}
                aria-describedby="newsletter-status"
                disabled={isSubmitting}
              />

              <button
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="button-spinner" />
                    Joining...
                  </>
                ) : (
                  <>
                    Subscribe
                    <span>→</span>
                  </>
                )}
              </button>

            </form>

            <p
              id="newsletter-status"
              className={`newsletter-status ${
                newsletterStatus
                  ? "newsletter-status-visible"
                  : ""
              }`}
              role="status"
              aria-live="polite"
            >
              {newsletterStatus}
            </p>

            <small className="newsletter-note">
              By subscribing, you agree to receive
              occasional emails from Brew & Bean.
            </small>

          </div>

        </div>
      </section>


      {/* =====================================
          MAIN FOOTER
      ===================================== */}

      <div className="footer-main">

        <div className="footer-container footer-grid">

          {/* BRAND */}

          <div className="footer-brand-column">

            <button
              type="button"
              className="footer-brand"
              onClick={() => scrollToSection(null)}
              aria-label="Back to homepage"
            >

              <span className="footer-brand-icon">
                ☕
              </span>

              <span className="footer-brand-name">
                <strong>Brew & Bean</strong>
                <small>COFFEE HOUSE</small>
              </span>

            </button>

            <p className="footer-description">
              Thoughtfully roasted coffee, freshly baked
              treats and warm moments served every day.
              Your neighborhood coffee house, made with
              love.
            </p>

            <div className="footer-socials">

              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social"
                  aria-label={`Visit Brew & Bean on ${social.label}`}
                >
                  {social.icon}
                </a>
              ))}

            </div>

          </div>


          {/* QUICK LINKS */}

          <div className="footer-column">

            <h3>Explore</h3>

            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() =>
                      scrollToSection(link.id)
                    }
                  >
                    <span>{link.label}</span>
                    <span className="footer-link-arrow">
                      →
                    </span>
                  </button>
                </li>
              ))}
            </ul>

          </div>


          {/* MENU */}

          <div className="footer-column">

            <h3>Our Menu</h3>

            <ul>
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() =>
                      scrollToSection(link.id)
                    }
                  >
                    <span>{link.label}</span>
                    <span className="footer-link-arrow">
                      →
                    </span>
                  </button>
                </li>
              ))}
            </ul>

          </div>


          {/* CONTACT */}

          <div className="footer-column footer-contact-column">

            <h3>Visit Us</h3>

            <div className="footer-contact-list">

              <a
                href="https://maps.google.com/?q=Brew+%26+Bean+Coffee+House"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-item"
              >

                <span className="contact-icon">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>

                <span>
                  <strong>Find us</strong>
                  <small>
                    24 Coffee Street,
                    <br />
                    Your City, India
                  </small>
                </span>

              </a>


              <a
                href="tel:+919876543210"
                className="footer-contact-item"
              >

                <span className="contact-icon">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M6.5 3.5 9 3l2 5-2.2 1.5a15 15 0 0 0 5.2 5.2l1.5-2.2 5 2-.5 2.5c-.3 1.4-1.5 2.5-3 2.5C10 19.5 4.5 14 4.5 7c0-1.5 1-3 2-3.5Z" />
                  </svg>
                </span>

                <span>
                  <strong>Call us</strong>
                  <small>
                    +91 98765 43210
                  </small>
                </span>

              </a>


              <a
                href="mailto:hello@brewandbean.com"
                className="footer-contact-item"
              >

                <span className="contact-icon">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="2"
                    />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                </span>

                <span>
                  <strong>Email us</strong>
                  <small>
                    hello@brewandbean.com
                  </small>
                </span>

              </a>

            </div>

          </div>


          {/* HOURS */}

          <div className="footer-column footer-hours-column">

            <h3>Opening Hours</h3>

            <div className="opening-hours">

              <div className="hours-row">
                <span>Monday – Friday</span>
                <strong>7:00 AM – 9:00 PM</strong>
              </div>

              <div className="hours-row">
                <span>Saturday</span>
                <strong>8:00 AM – 10:00 PM</strong>
              </div>

              <div className="hours-row">
                <span>Sunday</span>
                <strong>8:00 AM – 8:00 PM</strong>
              </div>

            </div>

            <div className="open-status">

              <span className="status-dot" />

              <span>
                Open today
              </span>

            </div>

            <button
              type="button"
              className="footer-order-button"
              onClick={() =>
                scrollToSection("menu")
              }
            >
              Order Now
              <span>→</span>
            </button>

          </div>

        </div>

      </div>


      {/* =====================================
          FOOTER BOTTOM
      ===================================== */}

      <div className="footer-bottom">

        <div className="footer-container footer-bottom-inner">

          <p>
            © {new Date().getFullYear()} Brew & Bean
            Coffee House. All rights reserved.
          </p>

          <div className="footer-legal">

            <button
              type="button"
              onClick={() =>
                alert("Privacy Policy page coming soon.")
              }
            >
              Privacy Policy
            </button>

            <button
              type="button"
              onClick={() =>
                alert("Terms & Conditions page coming soon.")
              }
            >
              Terms & Conditions
            </button>

            <button
              type="button"
              onClick={() =>
                alert("Accessibility information coming soon.")
              }
            >
              Accessibility
            </button>

          </div>

          <button
            type="button"
            className="back-to-top"
            onClick={handleBackToTop}
            aria-label="Back to top"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="m6 14 6-6 6 6" />
            </svg>

            <span>Top</span>
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
