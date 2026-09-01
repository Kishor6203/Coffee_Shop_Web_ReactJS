import React from "react";

import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Menu from "./components/Menu/Menu";
import Offers from "./components/Offers/Offers";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Chef from "./components/Chef/Chef";
import Gallery from "./components/Gallery/Gallery";
import VisitUs from "./components/VisitUs/VisitUs";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

const sections = [
  { id: "about", component: <About /> },
  { id: "menu", component: <Menu /> },
  { id: "offers", component: <Offers /> },
  { id: "why-us", component: <WhyChooseUs /> },
  { id: "chef", component: <Chef /> },
  { id: "gallery", component: <Gallery /> },
  { id: "visit", component: <VisitUs /> },
  { id: "testimonials", component: <Testimonials /> },
  { id: "contact", component: <Contact /> },
];

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />

        {sections.map(({ id, component }) => (
          <section key={id} id={id}>
            {component}
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default App;
