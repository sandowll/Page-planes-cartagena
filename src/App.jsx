import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from "./components/Hero/Hero.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Dóndeir from "./components/Services/doneir.jsx";
import Quehacer from "./components/Services/quehacer.jsx";
import Informacionpráctica from "./components/Services/informacionpractica.jsx";
import Banner from "./components/Banner/Banner.jsx";
import AppStore from "./components/AppStore/AppStore.jsx";
import Testimonial from "./components/Testimonial/Testimonial.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar />
        <Routes>
          <Route path="/dóndeir" element={<Dóndeir />} />
          <Route path="/quehacer" element={<Quehacer />} />
          <Route path="/informacionpráctica" element={<Informacionpráctica />} />
          <Route path="/" element={
            <>
              <Hero />
              <div style={{ height: "700px" }}></div>
              <Banner />
              <AppStore />
              <Testimonial />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;