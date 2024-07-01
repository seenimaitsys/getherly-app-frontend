import React, { useEffect } from "react";
import Content from "../layout/content";
import "./index.scss";
import "../../src/assert/css/main.min.css"; //custome boostrap design
function App() {
  useEffect(() => {
    const checking = () => {
      const baseURI = document.baseURI.toLowerCase(); // Get the base URI and convert to lowercase for case-insensitive comparison

      if (baseURI.includes("lime")) {
        // Check if base URI contains 'lime'
        const userAgent = navigator.userAgent || navigator.vendor;

        if (/android/i.test(userAgent)) {
          setTimeout(() => {
            window.location.href =
              "https://play.google.com/store/apps/details?id=com.twigscorp.app";
          }, 1000);

          // Attempt to open the intent URL
          // window.location.href = androidIntentURL;
        } else if (/iPad|iPhone|iPod/.test(userAgent)) {
          // setTimeout(() => {
          window.location.href =
            "https://apps.apple.com/ag/app/getherly/id1608764375";
          // }, 1000);
          // window.location.href =
          //   "https://apps.apple.com/ag/app/twigs-one/id1608764375";
          // }, 1000);

          // Attempt to open the app URL
          // window.location.href = iosAppURL;
        }
        // You can add more conditions for other device types if needed
      }
      // } else {
      //   setTimeout(() => {
      //     // window.location.href = "https://www.getherly.net/";
      //   }, 1000);
      // }
    };

    checking(); // Call the checking function when component mounts

    // Optionally, return a cleanup function if needed
    return () => {
      // Cleanup code here if necessary
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return <Content></Content>;
}

export default App;
