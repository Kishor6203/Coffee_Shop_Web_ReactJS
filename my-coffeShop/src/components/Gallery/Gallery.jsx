import React, { useEffect, useState } from "react";
import "./Gallery.css";

const images = [
  {
    id: 1,
    url: "https://www.bbassets.com/media/uploads/p/xxl/40337920_2-starbucks-coffee-latte-tall.jpg",
    title: "Cozy Interior",
    category: "The Space",
    description:
      "A warm corner designed for slow mornings and long conversations.",
  },
  {
    id: 2,
    url: "https://i.ytimg.com/vi/9HwVpoEDocc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCow8BEpIxKqgGZBxsiR1yRX5wQ2A",
    title: "Fresh Coffee",
    category: "The Coffee",
    description:
      "Freshly prepared coffee, made with attention to every detail.",
  },
  {
    id: 3,
    url: "https://storage.cornercoffeestore.com/2021/06/cold-brew-ice-cream-summer-dessert.jpg",
    title: "Barista Craft",
    category: "The Craft",
    description:
      "Thoughtful preparation, beautiful presentation and great ingredients.",
  },
  {
    id: 4,
    url: "https://howtowithjaya.wordpress.com/wp-content/uploads/2016/07/1-2.jpg",
    title: "Warm Seating",
    category: "The Space",
    description:
      "Comfortable spaces made for catching up, working or simply unwinding.",
  },
  {
    id: 5,
    url: "https://hoxtoncoffee.com/cdn/shop/articles/latte-art-on-mocha_1200x1200.jpg?v=1660069726",
    title: "Happy Customers",
    category: "The People",
    description:
      "Because the best part of a café is the people who fill it.",
  },
  {
    id: 6,
    url: "https://instacuppastore.com/cdn/shop/articles/blog-cold-coffee-with-ice-cream-cover.jpg?v=1777809345&width=1920",
    title: "Coffee Moments",
    category: "Everyday Moments",
    description:
      "Small moments, carefully made and worth remembering.",
  },
];

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(null);

  const openLightbox = (image) => {
    setActiveImage(image);
  };

  const closeLightbox = () => {
    setActiveImage(null);
  };

  const showPrevious = () => {
    if (!activeImage) return;

    const currentIndex = images.findIndex(
      (image) => image.id === activeImage.id
    );

    const previousIndex =
      (currentIndex - 1 + images.length) % images.length;

    setActiveImage(images[previousIndex]);
  };

  const showNext = () => {
    if (!activeImage) return;

    const currentIndex = images.findIndex(
      (image) => image.id === activeImage.id
    );

    const nextIndex =
      (currentIndex + 1) % images.length;

    setActiveImage(images[nextIndex]);
  };

  useEffect(() => {
    if (!activeImage) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeImage]);

  return (
    <>
      <section
        className="gallery"
        id="gallery"
        aria-labelledby="gallery-title"
      >
        <div className="gallery-container">

          {/* =============================================
              HEADER
          ============================================== */}

          <header className="gallery-header">

            <div className="gallery-eyebrow">
              <span className="gallery-eyebrow-line" />
              <span>Inside FoodiePlace</span>
            </div>

            <div className="gallery-heading-row">

              <div>
                <h2
                  id="gallery-title"
                  className="gallery-title"
                >
                  Moments worth
                  <br />
                  <em>staying for.</em>
                </h2>
              </div>

              <p className="gallery-description">
                Take a look around our little corner of the
                city — from carefully crafted coffee to the
                people and moments that make FoodiePlace
                feel like home.
              </p>

            </div>

          </header>


          {/* =============================================
              GALLERY
          ============================================== */}

          <div className="gallery-grid">

            {images.map((item, index) => (
              <button
                type="button"
                className={`gallery-item gallery-item-${index + 1}`}
                key={item.id}
                onClick={() => openLightbox(item)}
                aria-label={`Open ${item.title} image`}
              >

                <img
                  src={item.url}
                  alt={item.title}
                  className="gallery-image"
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                />

                <span
                  className="gallery-image-shade"
                  aria-hidden="true"
                />

                <span className="gallery-item-content">

                  <span className="gallery-category">
                    {item.category}
                  </span>

                  <span className="gallery-item-title">
                    {item.title}
                  </span>

                  <span className="gallery-view">
                    View image
                    <span aria-hidden="true">↗</span>
                  </span>

                </span>

                <span
                  className="gallery-index"
                  aria-hidden="true"
                >
                  0{item.id}
                </span>

              </button>
            ))}

          </div>


          {/* =============================================
              BOTTOM CTA
          ============================================== */}

          <div className="gallery-footer">

            <p>
              Come in, take a seat,
              <strong> stay awhile.</strong>
            </p>

            <a
              href="#location"
              className="gallery-location-button"
            >
              <span>Find our café</span>
              <span aria-hidden="true">↗</span>
            </a>

          </div>

        </div>
      </section>


      {/* =================================================
          LIGHTBOX
      ================================================= */}

      {activeImage && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeImage.title} image viewer`}
          onClick={closeLightbox}
        >

          <div
            className="lightbox-inner"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Top bar */}

            <div className="lightbox-top">

              <div>
                <span className="lightbox-category">
                  {activeImage.category}
                </span>

                <h3>
                  {activeImage.title}
                </h3>
              </div>

              <button
                type="button"
                className="lightbox-close"
                onClick={closeLightbox}
                aria-label="Close image viewer"
              >
                <span />
                <span />
              </button>

            </div>


            {/* Image */}

            <div className="lightbox-image-wrap">

              <img
                src={activeImage.url}
                alt={activeImage.title}
                className="lightbox-image"
              />

              <button
                type="button"
                className="lightbox-arrow lightbox-arrow-left"
                onClick={showPrevious}
                aria-label="Previous image"
              >
                ←
              </button>

              <button
                type="button"
                className="lightbox-arrow lightbox-arrow-right"
                onClick={showNext}
                aria-label="Next image"
              >
                →
              </button>

            </div>


            {/* Bottom */}

            <div className="lightbox-bottom">

              <p>
                {activeImage.description}
              </p>

              <span>
                Use ← → to browse · ESC to close
              </span>

            </div>

          </div>

        </div>
      )}
    </>
  );
};

export default Gallery;
