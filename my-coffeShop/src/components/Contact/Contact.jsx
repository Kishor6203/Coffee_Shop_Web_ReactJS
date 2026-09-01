import React, { useState } from "react";
import "./Contact.css";

const INITIAL_FORM = {
  name: "",
  phone: "",
  email: "",
  date: "",
  time: "",
  guests: "2",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    if (isSubmitted) {
      setIsSubmitted(false);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[+]?[\d\s()-]{8,15}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!formData.date) {
      newErrors.date = "Please select a date.";
    }

    if (!formData.time) {
      newErrors.time = "Please select a time.";
    }

    if (!formData.guests) {
      newErrors.guests = "Please select guests.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      /*
       * Production integration:
       *
       * Replace this timeout with your API request.
       *
       * Example:
       *
       * const response = await fetch("/api/reservations", {
       *   method: "POST",
       *   headers: {
       *     "Content-Type": "application/json",
       *   },
       *   body: JSON.stringify(formData),
       * });
       *
       * if (!response.ok) {
       *   throw new Error("Reservation failed");
       * }
       */

      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });

      setIsSubmitted(true);
      setFormData(INITIAL_FORM);
    } catch (error) {
      setErrors({
        form: "Something went wrong. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi FoodiePlace Café! I'd like to reserve a table."
    );

    window.open(
      `https://wa.me/919876543210?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleCall = () => {
    window.location.href = "tel:+919876543210";
  };

  const scrollToForm = () => {
    document
      .querySelector(".contact-form")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
  };

  return (
    <section
      className="contact"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact-container">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <header className="contact-header">

          <div className="contact-kicker">
            <span className="kicker-line" />
            <span>Reservations & Enquiries</span>
          </div>

          <div className="contact-heading">

            <h2 id="contact-title">
              Your table,
              <br />
              <em>your moment.</em>
            </h2>

            <p>
              Make your next coffee break a little more special.
              Reserve your favourite table and let us take care
              of the rest.
            </p>

          </div>

        </header>


        {/* =====================================================
            CONTENT
        ====================================================== */}

        <div className="contact-layout">

          {/* ===================================================
              FORM
          ==================================================== */}

          <div className="reservation-panel">

            <div className="reservation-top">

              <div>
                <span className="panel-label">
                  Table reservation
                </span>

                <h3>
                  Make a booking
                </h3>
              </div>

              <span className="panel-number">
                01
              </span>

            </div>


            {isSubmitted && (
              <div
                className="success-message"
                role="status"
                aria-live="polite"
              >
                <div className="success-icon">
                  ✓
                </div>

                <div>
                  <strong>
                    Request received
                  </strong>

                  <p>
                    Thank you! Our team will confirm your
                    reservation shortly.
                  </p>
                </div>
              </div>
            )}


            {errors.form && (
              <div
                className="form-error"
                role="alert"
              >
                {errors.form}
              </div>
            )}


            <form
              className="contact-form"
              onSubmit={handleSubmit}
              noValidate
            >

              {/* NAME */}

              <div className="form-field">
                <label htmlFor="name">
                  Full name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="e.g. Arjun Menon"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={
                    errors.name
                      ? "name-error"
                      : undefined
                  }
                />

                {errors.name && (
                  <span
                    id="name-error"
                    className="field-error"
                  >
                    {errors.name}
                  </span>
                )}
              </div>


              {/* PHONE */}

              <div className="form-field">
                <label htmlFor="phone">
                  Phone number
                </label>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={
                    errors.phone
                      ? "phone-error"
                      : undefined
                  }
                />

                {errors.phone && (
                  <span
                    id="phone-error"
                    className="field-error"
                  >
                    {errors.phone}
                  </span>
                )}
              </div>


              {/* EMAIL */}

              <div className="form-field full-width">
                <label htmlFor="email">
                  Email address
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={
                    errors.email
                      ? "email-error"
                      : undefined
                  }
                />

                {errors.email && (
                  <span
                    id="email-error"
                    className="field-error"
                  >
                    {errors.email}
                  </span>
                )}
              </div>


              {/* DATE */}

              <div className="form-field">
                <label htmlFor="date">
                  Date
                </label>

                <input
                  id="date"
                  type="date"
                  name="date"
                  min={today}
                  value={formData.date}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.date)}
                />

                {errors.date && (
                  <span className="field-error">
                    {errors.date}
                  </span>
                )}
              </div>


              {/* TIME */}

              <div className="form-field">
                <label htmlFor="time">
                  Preferred time
                </label>

                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.time)}
                >
                  <option value="">
                    Select time
                  </option>

                  <option value="08:00">
                    8:00 AM
                  </option>

                  <option value="09:00">
                    9:00 AM
                  </option>

                  <option value="10:00">
                    10:00 AM
                  </option>

                  <option value="11:00">
                    11:00 AM
                  </option>

                  <option value="12:00">
                    12:00 PM
                  </option>

                  <option value="13:00">
                    1:00 PM
                  </option>

                  <option value="14:00">
                    2:00 PM
                  </option>

                  <option value="15:00">
                    3:00 PM
                  </option>

                  <option value="16:00">
                    4:00 PM
                  </option>

                  <option value="17:00">
                    5:00 PM
                  </option>

                  <option value="18:00">
                    6:00 PM
                  </option>

                  <option value="19:00">
                    7:00 PM
                  </option>

                  <option value="20:00">
                    8:00 PM
                  </option>

                  <option value="21:00">
                    9:00 PM
                  </option>

                </select>

                {errors.time && (
                  <span className="field-error">
                    {errors.time}
                  </span>
                )}
              </div>


              {/* GUESTS */}

              <div className="form-field">
                <label htmlFor="guests">
                  Guests
                </label>

                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                >
                  <option value="1">
                    1 Guest
                  </option>

                  <option value="2">
                    2 Guests
                  </option>

                  <option value="3">
                    3 Guests
                  </option>

                  <option value="4">
                    4 Guests
                  </option>

                  <option value="5">
                    5 Guests
                  </option>

                  <option value="6">
                    6 Guests
                  </option>

                  <option value="7">
                    7 Guests
                  </option>

                  <option value="8">
                    8 Guests
                  </option>

                  <option value="9">
                    9 Guests
                  </option>

                  <option value="10">
                    10 Guests
                  </option>
                </select>
              </div>


              {/* MESSAGE */}

              <div className="form-field full-width">
                <label htmlFor="message">
                  Special request
                  <span>Optional</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  maxLength="500"
                  placeholder="Birthday, window seat, dietary request..."
                  value={formData.message}
                  onChange={handleChange}
                />

                <small>
                  {formData.message.length}/500
                </small>
              </div>


              {/* SUBMIT */}

              <div className="form-submit full-width">

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner" />
                      Sending request...
                    </>
                  ) : (
                    <>
                      Confirm reservation
                      <span>→</span>
                    </>
                  )}
                </button>

                <p className="privacy-note">
                  By submitting, you agree to be contacted
                  regarding your reservation.
                </p>

              </div>

            </form>

          </div>


          {/* ===================================================
              CONTACT INFO
          ==================================================== */}

          <aside className="contact-side">

            <div className="side-intro">
              <span>
                02
              </span>

              <p>
                Prefer a quick conversation?
                Reach us directly.
              </p>
            </div>


            {/* CONTACT CARD */}

            <div className="contact-card">

              <div className="contact-card-heading">
                <span>
                  Contact the café
                </span>

                <div className="open-status">
                  <i />
                  Open today
                </div>
              </div>


              {/* PHONE */}

              <button
                type="button"
                className="info-row clickable"
                onClick={handleCall}
              >
                <span className="info-icon">
                  ☎
                </span>

                <span>
                  <small>
                    Call us
                  </small>

                  <strong>
                    +91 98765 43210
                  </strong>
                </span>

                <b>
                  →
                </b>
              </button>


              {/* WHATSAPP */}

              <button
                type="button"
                className="info-row clickable"
                onClick={handleWhatsApp}
              >
                <span className="info-icon">
                  💬
                </span>

                <span>
                  <small>
                    WhatsApp
                  </small>

                  <strong>
                    Chat with us
                  </strong>
                </span>

                <b>
                  →
                </b>
              </button>


              {/* ADDRESS */}

              <div className="info-row">
                <span className="info-icon">
                  ⌖
                </span>

                <span>
                  <small>
                    Find us
                  </small>

                  <strong>
                    MG Road, Bengaluru
                  </strong>
                </span>
              </div>

            </div>


            {/* HOURS */}

            <div className="hours-card">

              <div className="hours-heading">
                <span>
                  Opening hours
                </span>

                <span>
                  03
                </span>
              </div>

              <div className="hours-item">
                <span>
                  Monday – Sunday
                </span>

                <strong>
                  8 AM – 10 PM
                </strong>
              </div>

              <div className="hours-item muted">
                <span>
                  Public Holidays
                </span>

                <strong>
                  9 AM – 9 PM
                </strong>
              </div>

            </div>


            {/* QUICK BOOK */}

            <div className="quick-book-card">

              <div className="quick-book-icon">
                ☕
              </div>

              <div>
                <strong>
                  Need a table now?
                </strong>

                <p>
                  Skip the form and contact
                  us directly.
                </p>
              </div>

              <button
                type="button"
                onClick={scrollToForm}
              >
                Book now
              </button>

            </div>

          </aside>

        </div>


        {/* =====================================================
            FOOTER NOTE
        ====================================================== */}

        <div className="contact-footer">

          <span>
            FOODIEPLACE CAFÉ
          </span>

          <p>
            Good coffee. Good people.
            <em> Good moments.</em>
          </p>

          <span>
            BENGALURU · INDIA
          </span>

        </div>

      </div>
    </section>
  );
};

export default Contact;