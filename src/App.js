import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import "../src/css/main.min.css";
// import "../src/css/index.min.css";
const HomePage = React.lazy(() => import("./layout/HomePage"));
const AboutPage = React.lazy(() => import("./layout/AboutPage"));
const Contacts = React.lazy(() => import("./pages/components/Contacts"));
const LoginPage = React.lazy(() => import("./layout/LoginPage"));
const HowDOIpage = React.lazy(() => import("./layout/How_Do_I_Page"));
const GojsViewSlider = React.lazy(() =>
  import("./pages/components/GojsViewSlider")
);
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
          <span id="progress-value">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="currentColor"
              className="bi bi-arrow-up"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
              />
            </svg>
          </span>
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutPage />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/how_do_i" element={<HowDOIpage />} />
          <Route path="/familyTree" element={<GojsViewSlider />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
