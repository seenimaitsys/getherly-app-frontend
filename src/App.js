import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
const HomePage = React.lazy(() => import("./layout/HomePage"));
const AboutPage = React.lazy(() => import("./layout/AboutPage"));
const Contacts = React.lazy(() => import("./pages/components/Contacts"));
const LoginPage = React.lazy(() => import("./layout/LoginPage"));
const HowDOIpage = React.lazy(() => import("./layout/LoginPage"));
function App() {
  ///Scroll To top function
  let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 20) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(rgba(84, 168, 199, 0.7) ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  };
  window.onscroll = calcScrollValue;
  // window.onload = calcScrollValue;

  return (
    <BrowserRouter>
      <div className="App">
        <div id="progress">
          <span id="progress-value">&#129045;</span>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutPage />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/how_do_i" element={<HowDOIpage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
