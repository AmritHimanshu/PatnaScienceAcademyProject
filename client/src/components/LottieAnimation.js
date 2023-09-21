import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function LottieAnimation({ animationUrl }) {
  const lottieContainer = useRef(null);

  useEffect(() => {
    let animation = null;

    async function getAnimation() {
      if (animationUrl) {
        try {
          const response = await fetch(animationUrl);
          const animationData = await response.json();
          animation = lottie.loadAnimation({
            container: lottieContainer.current,
            renderer: "svg",
            loop: false,
            autoplay: true,
            animationData: animationData,
          });
        } catch (error) {
          console.error("Error loading animation:", error);
        }
      }
    }
    getAnimation();

    return () => {
      if (animation) {
        animation.destroy();
      }
    };
  }, [animationUrl]);

  return <div ref={lottieContainer} className="h-[500px] overflow-hidden"></div>;
}
