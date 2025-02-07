import React, { useState, useEffect } from "react";
import "../../css/mainPage/introscetion.css";

function IntroSection() {
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    const handleResize = async () => {
      if (window.matchMedia("(max-width: 480px)").matches) {
        // Small screen video
        const videoMobile = await import("../../assets/home/video.mp4");
        setVideoSrc(videoMobile.default);
      } else {
        // Large screen video
        const videoDesktop = await import("../../assets/home/video2.mp4");
        setVideoSrc(videoDesktop.default);
      }
    };

    // Set the video source on component mount
    handleResize();

    // Update video source on window resize
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="intro-section">
      <div className="video-background">
        {videoSrc && (
          <video autoPlay loop muted>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <div className="text-overlay">
          <h1>Miguel Silva</h1>
          <h2>Saúde e bem-estar</h2>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;