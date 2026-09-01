import React, { useEffect, useState } from "react";
import "./Navbar.css";

const menuCategories = [
  { name: "Coffee", id: "menu" },
  { name: "Tea", id: "menu" },
  { name: "Cold Drinks", id: "menu" },
  { name: "Pastries", id: "menu" },
  { name: "Breakfast", id: "menu" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  /* ================================
     SCROLL EFFECT
  ================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ================================
     BODY SCROLL LOCK
  ================================= */

  useEffect(() => {
    if (mobileOpen || searchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, searchOpen]);

  /* ================================
     ESCAPE KEY
  ================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setSearchOpen(false);
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /* ================================
     CLOSE MOBILE MENU
  ================================= */

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMenuOpen(false);
  };

  /* ================================
     SEARCH
  ================================= */

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    const query = searchValue.trim();

    if (!query) return;

    console.log("Searching for:", query);

    setSearchOpen(false);
  };

  /* ================================
     SCROLL TO SECTION
  ================================= */

  const scrollToSection = (id) => {
    setMobileOpen(false);
    setMenuOpen(false);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {/* =================================
          ANNOUNCEMENT BAR
      ================================= */}

      <div className="announcement-bar">
        <div className="announcement-inner">
          <span>
            ☕ Freshly roasted coffee delivered to your door
          </span>

          <button
            type="button"
            className="announcement-link"
            onClick={() => scrollToSection("offers")}
          >
            View Offers →
          </button>
        </div>
      </div>

      {/* =================================
          MAIN HEADER
      ================================= */}

      <header
        className={`site-header ${
          scrolled ? "header-scrolled" : ""
        }`}
      >
        <div className="navbar-container">

          {/* LOGO */}

          <button
            type="button"
            className="brand"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });

              closeMobileMenu();
            }}
            aria-label="Go to homepage"
          >
            <span className="brand-icon">☕</span>

            <span className="brand-text">
              <strong>Brew & Bean</strong>
              <small>COFFEE HOUSE</small>
            </span>
          </button>

          {/* =================================
              DESKTOP NAVIGATION
          ================================= */}

          <nav
            className="desktop-navigation"
            aria-label="Main navigation"
          >
            <button
              type="button"
              className="nav-link active"
              onClick={() => window.scrollTo({
                top: 0,
                behavior: "smooth",
              })}
            >
              Home
            </button>

            {/* MENU DROPDOWN */}

            <div
              className="nav-dropdown"
              onMouseEnter={() => setMenuOpen(true)}
              onMouseLeave={() => setMenuOpen(false)}
            >
              <button
                type="button"
                className={`nav-dropdown-button ${
                  menuOpen ? "dropdown-active" : ""
                }`}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                Menu

                <span
                  className={`chevron ${
                    menuOpen ? "chevron-up" : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              <div
                className={`dropdown-menu ${
                  menuOpen ? "dropdown-visible" : ""
                }`}
              >
                <div className="dropdown-header">
                  <span>Our Menu</span>
                  <small>Made fresh every day</small>
                </div>

                {menuCategories.map((category) => (
                  <button
                    key={category.name}
                    type="button"
                    className="dropdown-item"
                    onClick={() =>
                      scrollToSection(category.id)
                    }
                  >
                    <span>{category.name}</span>
                    <span>→</span>
                  </button>
                ))}

                <button
                  type="button"
                  className="view-full-menu"
                  onClick={() => scrollToSection("menu")}
                >
                  View Full Menu
                </button>
              </div>
            </div>

            <button
              type="button"
              className="nav-link"
              onClick={() => scrollToSection("about")}
            >
              About
            </button>

            <button
              type="button"
              className="nav-link"
              onClick={() => scrollToSection("visit")}
            >
              Locations
            </button>

            <button
              type="button"
              className="nav-link"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
          </nav>

          {/* =================================
              ACTIONS
          ================================= */}

          <div className="navbar-actions">

            {/* SEARCH */}

            <button
              type="button"
              className="icon-button"
              aria-label="Open search"
              onClick={() => setSearchOpen(true)}
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" />
              </svg>
            </button>

            {/* WISHLIST */}

            <button
              type="button"
              className="icon-button desktop-only-action"
              aria-label="Wishlist"
              onClick={() => alert("Wishlist coming soon!")}
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.8 8.6c0 5.5-8.8 10.4-8.8 10.4S3.2 14.1 3.2 8.6C3.2 5.8 5.3 4 7.9 4c1.6 0 3.1.8 4.1 2 1-1.2 2.5-2 4.1-2 2.6 0 4.7 1.8 4.7 4.6Z" />
              </svg>
            </button>

            {/* ACCOUNT */}

            <button
              type="button"
              className="icon-button desktop-only-action"
              aria-label="My account"
              onClick={() => alert("Account coming soon!")}
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c.7-4.2 3.4-6.5 8-6.5s7.3 2.3 8 6.5" />
              </svg>
            </button>

            {/* CART */}

            <button
              type="button"
              className="cart-button"
              aria-label="Shopping cart"
              onClick={() => alert("Cart coming soon!")}
            >
              <span className="cart-icon-wrapper">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M3 4h2l2.1 10.1a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 1.9-1.4L21 8H6" />
                  <circle cx="10" cy="20" r="1.3" />
                  <circle cx="18" cy="20" r="1.3" />
                </svg>

                <span className="cart-badge">
                  0
                </span>
              </span>

              <span className="cart-label">
                Cart
              </span>
            </button>

            {/* ORDER */}

            <button
              type="button"
              className="order-button"
              onClick={() => scrollToSection("menu")}
            >
              Order Now
            </button>

            {/* MOBILE HAMBURGER */}

            <button
              type="button"
              className={`hamburger ${
                mobileOpen ? "hamburger-active" : ""
              }`}
              aria-label={
                mobileOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

          </div>
        </div>
      </header>

      {/* =================================
          SEARCH OVERLAY
      ================================= */}

      <div
        className={`search-overlay ${
          searchOpen ? "search-overlay-visible" : ""
        }`}
      >
        <div
          className="search-backdrop"
          onClick={() => setSearchOpen(false)}
        />

        <div className="search-panel">

          <div className="search-panel-header">
            <div>
              <span className="search-eyebrow">
                SEARCH
              </span>

              <h2>
                What are you craving?
              </h2>
            </div>

            <button
              type="button"
              className="search-close"
              aria-label="Close search"
              onClick={() => setSearchOpen(false)}
            >
              ×
            </button>
          </div>

          <form
            className="search-form"
            onSubmit={handleSearchSubmit}
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>

            <input
              type="search"
              placeholder="Search coffee, pastries, drinks..."
              value={searchValue}
              onChange={(event) =>
                setSearchValue(event.target.value)
              }
            />

            <button type="submit">
              Search
            </button>
          </form>

          <div className="popular-searches">
            <span>Popular:</span>

            <button
              type="button"
              onClick={() =>
                setSearchValue("Cappuccino")
              }
            >
              Cappuccino
            </button>

            <button
              type="button"
              onClick={() =>
                setSearchValue("Cold Brew")
              }
            >
              Cold Brew
            </button>

            <button
              type="button"
              onClick={() =>
                setSearchValue("Croissant")
              }
            >
              Croissant
            </button>

            <button
              type="button"
              onClick={() =>
                setSearchValue("Latte")
              }
            >
              Latte
            </button>
          </div>
        </div>
      </div>

      {/* =================================
          MOBILE MENU
      ================================= */}

      <div
        className={`mobile-navigation ${
          mobileOpen
            ? "mobile-navigation-visible"
            : ""
        }`}
      >
        <div
          className="mobile-backdrop"
          onClick={closeMobileMenu}
        />

        <aside className="mobile-drawer">

          <div className="mobile-drawer-header">

            <button
              type="button"
              className="brand"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });

                closeMobileMenu();
              }}
            >
              <span className="brand-icon">
                ☕
              </span>

              <span className="brand-text">
                <strong>Brew & Bean</strong>
                <small>COFFEE HOUSE</small>
              </span>
            </button>

            <button
              type="button"
              className="mobile-close"
              aria-label="Close menu"
              onClick={closeMobileMenu}
            >
              ×
            </button>

          </div>

          {/* MOBILE LINKS */}

          <nav className="mobile-nav-links">

            <button
              type="button"
              className="mobile-nav-link mobile-active"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });

                closeMobileMenu();
              }}
            >
              <span>Home</span>
              <span>→</span>
            </button>

            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={() =>
                setMenuOpen(!menuOpen)
              }
            >
              <span>Menu</span>
              <span>
                {menuOpen ? "−" : "+"}
              </span>
            </button>

            <div
              className={`mobile-submenu ${
                menuOpen
                  ? "mobile-submenu-open"
                  : ""
              }`}
            >
              {menuCategories.map(
                (category) => (
                  <button
                    key={category.name}
                    type="button"
                    onClick={() =>
                      scrollToSection(
                        category.id
                      )
                    }
                  >
                    {category.name}
                  </button>
                )
              )}

              <button
                type="button"
                className="mobile-full-menu"
                onClick={() =>
                  scrollToSection("menu")
                }
              >
                View Full Menu →
              </button>
            </div>

            <button
              type="button"
              className="mobile-nav-link"
              onClick={() =>
                scrollToSection("about")
              }
            >
              <span>About</span>
              <span>→</span>
            </button>

            <button
              type="button"
              className="mobile-nav-link"
              onClick={() =>
                scrollToSection("visit")
              }
            >
              <span>Locations</span>
              <span>→</span>
            </button>

            <button
              type="button"
              className="mobile-nav-link"
              onClick={() =>
                scrollToSection("contact")
              }
            >
              <span>Contact</span>
              <span>→</span>
            </button>

          </nav>

          {/* MOBILE ACTIONS */}

          <div className="mobile-actions">

            <button
              type="button"
              onClick={() =>
                alert("Account coming soon!")
              }
            >
              <span>👤</span>
              My Account
            </button>

            <button
              type="button"
              onClick={() =>
                alert("Wishlist coming soon!")
              }
            >
              <span>♡</span>
              Wishlist
            </button>

            <button
              type="button"
              onClick={() =>
                alert("Cart coming soon!")
              }
            >
              <span>🛒</span>
              Cart
            </button>

          </div>

          <button
            type="button"
            className="mobile-order-button"
            onClick={() =>
              scrollToSection("menu")
            }
          >
            Order Now
          </button>

          <div className="mobile-footer">
            <p>
              Fresh coffee. Good moments.
            </p>

            <span>
              © {new Date().getFullYear()} Brew & Bean
            </span>
          </div>

        </aside>
      </div>
    </>
  );
}

export default Navbar;