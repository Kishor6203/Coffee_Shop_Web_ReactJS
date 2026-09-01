import React, { useMemo, useState } from "react";
import "./Menu.css";

const menuItems = [
  {
    id: 1,
    name: "Caffè Latte",
    price: 180,
    category: "Coffee",
    desc: "Smooth espresso with steamed milk and a delicate layer of silky foam.",
    img: "https://media.istockphoto.com/id/2168005130/photo/heart-shaped-latte-art-in-a-white-cup-with-coffee-beans-isolated-on-wooden-table-side-view-of.jpg?s=612x612&w=0&k=20&c=hQmWzRmUpVsrEVD97Dwy7jxk6FmRJhKbA2VNh_D5V9s=",
    tag: "Signature",
    popular: true,
  },
  {
    id: 2,
    name: "Cappuccino",
    price: 160,
    category: "Coffee",
    desc: "Rich espresso balanced with velvety steamed milk and a generous foam finish.",
    img: "https://guentercoffee.com/cdn/shop/articles/anleitung-cappuccino-blogheader_749c310f-0dc4-4a54-8fdc-351bd3b33cd6.jpg?v=1778077512&width=1200",
    tag: "Bestseller",
    popular: true,
  },
  {
    id: 3,
    name: "Espresso",
    price: 120,
    category: "Coffee",
    desc: "A concentrated, bold shot with a rich crema and a beautifully intense finish.",
    img: "https://www.folgerscoffee.com/folgers/articles/35%20Types%20of%20Coffee/5424/image-thumb__5424__responsive_1399_JPEG/Body-4-tablet-desktop-40percent.c37fb986.jpg",
    tag: "Classic",
    popular: false,
  },
  {
    id: 4,
    name: "Cold Brew",
    price: 200,
    category: "Cold Coffee",
    desc: "Slow-steeped for hours to create an exceptionally smooth, naturally sweet finish.",
    img: "https://www.folgerscoffee.com/folgers/articles/35%20Types%20of%20Coffee/5428/image-thumb__5428__responsive_1399_JPEG/Body-6-tablet-desktop-40percent.66859df1.jpg",
    tag: "Refreshing",
    popular: true,
  },
  {
    id: 5,
    name: "Mocha",
    price: 190,
    category: "Specialty",
    desc: "A comforting combination of espresso, premium chocolate and steamed milk.",
    img: "https://c.ndtvimg.com/2023-04/df3mgt7o_cold-coffee_625x300_03_April_23.jpg",
    tag: "Chocolate",
    popular: false,
  },
  {
    id: 6,
    name: "Flat White",
    price: 170,
    category: "Coffee",
    desc: "Double espresso finished with smooth microfoam for a rich, balanced cup.",
    img: "https://www.barbox.in/cdn/shop/products/Doublewall350ml_2048x.jpg?v=1677660508",
    tag: "Barista Pick",
    popular: true,
  },
];

const categories = [
  "All",
  "Coffee",
  "Cold Coffee",
  "Specialty",
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [cart, setCart] = useState({});

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") {
      return menuItems;
    }

    return menuItems.filter(
      (item) => item.category === activeCategory
    );
  }, [activeCategory]);

  const addToCart = (item) => {
    setCart((currentCart) => ({
      ...currentCart,
      [item.id]: (currentCart[item.id] || 0) + 1,
    }));
  };

  const cartCount = Object.values(cart).reduce(
    (total, quantity) => total + quantity,
    0
  );

  const cartTotal = Object.entries(cart).reduce(
    (total, [id, quantity]) => {
      const item = menuItems.find(
        (menuItem) => menuItem.id === Number(id)
      );

      return total + (item ? item.price * quantity : 0);
    },
    0
  );

  return (
    <section
      className="menu"
      id="menu"
      aria-labelledby="menu-title"
    >
      <div className="menu-container">

        {/* ==================================================
            HEADER
        ================================================== */}

        <header className="menu-header-section">

          <div className="menu-eyebrow">
            <span className="menu-eyebrow-line" />
            <span>Made fresh at FoodiePlace</span>
          </div>

          <div className="menu-heading-row">

            <div>
              <h2
                id="menu-title"
                className="menu-title"
              >
                Crafted for
                <br />
                <em>your moment.</em>
              </h2>
            </div>

            <p className="menu-intro">
              From bold espresso to slow-steeped cold brew,
              every cup is prepared with carefully selected
              beans and a whole lot of care.
            </p>

          </div>

        </header>


        {/* ==================================================
            CATEGORY FILTER
        ================================================== */}

        <div
          className="menu-filter"
          role="tablist"
          aria-label="Menu categories"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={
                activeCategory === category
              }
              className={
                activeCategory === category
                  ? "menu-filter-btn active"
                  : "menu-filter-btn"
              }
              onClick={() =>
                setActiveCategory(category)
              }
            >
              {category}
            </button>
          ))}
        </div>


        {/* ==================================================
            MENU GRID
        ================================================== */}

        <div className="menu-grid">

          {filteredItems.map((item) => (
            <article
              className="menu-card"
              key={item.id}
            >

              {/* Image */}

              <div className="menu-image-wrap">

                <img
                  src={item.img}
                  alt={item.name}
                  className="menu-image"
                  loading="lazy"
                  decoding="async"
                />

                <div
                  className="menu-image-shade"
                  aria-hidden="true"
                />

                <span className="menu-item-tag">
                  {item.tag}
                </span>

                {item.popular && (
                  <span className="menu-popular">
                    Popular
                  </span>
                )}

              </div>


              {/* Content */}

              <div className="menu-info">

                <div className="menu-card-heading">

                  <div>
                    <span className="menu-category">
                      {item.category}
                    </span>

                    <h3>
                      {item.name}
                    </h3>
                  </div>

                  <span className="menu-price">
                    ₹{item.price}
                  </span>

                </div>


                <p className="menu-description">
                  {item.desc}
                </p>


                {/* Action */}

                <button
                  type="button"
                  className="menu-order-btn"
                  onClick={() => addToCart(item)}
                >
                  <span>
                    {cart[item.id]
                      ? `Added · ${cart[item.id]}`
                      : "Add to order"}
                  </span>

                  <span
                    className="menu-order-icon"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

              </div>

            </article>
          ))}

        </div>


        {/* ==================================================
            EMPTY STATE
        ================================================== */}

        {filteredItems.length === 0 && (
          <div className="menu-empty">
            <h3>No items found</h3>
            <p>
              We're refreshing this part of the menu.
            </p>
          </div>
        )}


        {/* ==================================================
            FOOTER
        ================================================== */}

        <div className="menu-footer">

          <div className="menu-footer-copy">
            <span className="menu-footer-label">
              Something for everyone
            </span>

            <p>
              Explore our complete selection of coffee,
              teas, pastries and café favourites.
            </p>
          </div>


          <a
            href="#location"
            className="view-menu-btn"
          >
            <span>View full menu</span>
            <span aria-hidden="true">↗</span>
          </a>

        </div>

      </div>


      {/* ==================================================
          FLOATING CART
      ================================================== */}

      {cartCount > 0 && (
        <div className="menu-cart">

          <div className="menu-cart-info">

            <span className="menu-cart-count">
              {cartCount}
            </span>

            <div>
              <strong>
                Your order
              </strong>

              <small>
                ₹{cartTotal}
              </small>
            </div>

          </div>

          <button
            type="button"
            className="menu-cart-button"
            onClick={() => {
              alert(
                "Your cart is ready. Connect this button to your checkout/cart flow."
              );
            }}
          >
            Checkout
            <span aria-hidden="true">→</span>
          </button>

        </div>
      )}

    </section>
  );
};

export default Menu;
