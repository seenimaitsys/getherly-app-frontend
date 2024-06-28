import React, { useEffect } from "react";
import Content from "../layout/content";
import "./index.scss";
import "../../src/assert/css/main.min.css"; //custome boostrap design
function App() {
  // useEffect(() => {
  //   const checking = () => {
  //     const baseURI = document.baseURI.toLowerCase(); // Get the base URI and convert to lowercase for case-insensitive comparison

  //     if (baseURI.includes("lime")) {
  //       // Check if base URI contains 'lime'
  //       const userAgent = navigator.userAgent || navigator.vendor;

  //       if (/android/i.test(userAgent)) {
  //         window.location.href =
  //           "https://play.google.com/store/apps/details?id=com.twigscorp.app";
  //       } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
  //         window.location.href =
  //           "https://apps.apple.com/ag/app/twigs-one/id1608764375";
  //       }
  //       // You can add more conditions for other device types if needed
  //     } else {
  //       console.log('Base URI does not contain "lime".');
  //     }
  //   };

  //   checking(); // Call the checking function when component mounts

  //   // Optionally, return a cleanup function if needed
  //   return () => {
  //     // Cleanup code here if necessary
  //   };
  // }, []); // Empty dependency array ensures this effect runs only once
  useEffect(() => {
    const checking = () => {
      const baseURI = document.baseURI.toLowerCase(); // Get the base URI and convert to lowercase for case-insensitive comparison

      if (baseURI.includes("lime")) {
        // Check if base URI contains 'lime'
        const userAgent = navigator.userAgent || navigator.vendor;

        if (/android/i.test(userAgent)) {
          // Create the intent URL
          const intentURL =
            "intent://play.google.com/store/apps/details?id=com.twigscorp.app&pcampaignid=web_auto_redirect&web_logged_in=1&redirect_entry_point=dp#Intent;scheme=https;action=android.intent.action.VIEW;package=com.android.vending;end";

          // Create a hidden iframe to load the intent URL
          const iframe = document.createElement("iframe");
          iframe.style.display = "none";
          document.body.appendChild(iframe);

          // Set a timeout to redirect to the fallback URL if the intent URL fails
          setTimeout(() => {
            window.location.href =
              "https://play.google.com/store/apps/details?id=com.twigscorp.app";
          }, 1000);

          // Attempt to load the intent URL
          iframe.src = intentURL;
        } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
          window.location.href =
            "https://apps.apple.com/ag/app/twigs-one/id1608764375";
        }
        // You can add more conditions for other device types if needed
      } else {
        console.log('Base URI does not contain "lime".');
      }
    };

    checking(); // Call the checking function when component mounts

    // Optionally, return a cleanup function if needed
    return () => {
      // Cleanup code here if necessary
    };
  }); // Empty dependency array ensures this effect runs only once

  return <Content></Content>;
}

export default App;
