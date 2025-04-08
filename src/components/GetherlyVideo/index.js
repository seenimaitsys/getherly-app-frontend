import React, { useEffect, useRef, useState } from "react";
import { Container, Col, Button } from "react-bootstrap";

const GetherlyVideo = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Video is in view, try to play
            const playPromise = videoElement.play();

            if (playPromise !== undefined) {
              playPromise.catch((error) => {
                console.log("Autoplay prevented:", error);
                // Fallback: show controls if autoplay is blocked
                videoElement.controls = true;
              });
            }
          } else {
            // Video is out of view, pause it
            videoElement.pause();
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of video is visible
      }
    );

    observer.observe(videoElement);

    return () => {
      observer.unobserve(videoElement);
      if (videoElement) videoElement.pause();
    };
  }, []);

  const handleUserInteraction = () => {
    setHasUserInteracted(true);
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
      // Try to play again now that we have user interaction
      videoRef.current
        .play()
        .catch((error) => console.log("Play error:", error));
    }
  };

  return (
    <>
      <Container
        fluid
        className="d-flex justify-content-center align-items-center mt-5 position-relative"
        onClick={handleUserInteraction}
      >
        <Col xl={7} sm={8} md={9} lg={7}>
          <video
            ref={videoRef}
            width="100%"
            height="100%"
            controls // Show controls if no interaction yet
            muted={!hasUserInteracted} // Start muted until user interacts
            autoPlay
            playsInline
            className="getherly-logo mt-10 rounded-20 shadow object-fit-cover"
          >
            <source
              src="https://twgsgdev02storagecdn.twigscorp.com/WelcomePost/Getherly-welcome.mp4"
              type="video/mp4"
            />
          </video>

          {!hasUserInteracted && (
            <div className="position-absolute top-50 start-50 translate-middle text-center">
              <Button
                variant="primary"
                onClick={handleUserInteraction}
                className="mt-3"
              >
                Enable Sound
              </Button>
              <p className="text-white mt-2">Click anywhere to enable sound</p>
            </div>
          )}
        </Col>
      </Container>
    </>
  );
};

export default GetherlyVideo;
