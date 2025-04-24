import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useEffect, useState } from "react";
import { heroVideo, smallHeroVideo } from "../utils";

export default function Hero() {
  const [VideoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const videoHandleer = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", videoHandleer);
    return () => {
      window.removeEventListener("resize", videoHandleer);
    };
  }, []);
  useGSAP(() => {
    gsap.fromTo(
      "#iphone-text",
      { y: 10 },
      {
        y: 0,
        delay: 2,
        opacity: 1,
      }
    );
    gsap.to("#cta", {
      y: -50,
      delay: 2,
      opacity: 1,
    });
  }, []);
  return (
    <section className="w-full bg-black relative nav-height">
      <div className="w-full h-5/6 flex flex-col flex-center">
        <p id="iphone-text" className="hero-title">
          iPhone 16 Pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={VideoSrc}
          >
            <source src={VideoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col translate-y-20 items-center opacity-0"
      >
        <a href="" className="btn">
          Buy
        </a>
        <p>From $199/month or $999</p>
      </div>
    </section>
  );
}
