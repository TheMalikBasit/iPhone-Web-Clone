import { useGSAP } from "@gsap/react";
import { explore1Img, explore2Img, exploreVideo } from "../utils";
import { animateWithGsap } from "../utils/animation";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Features = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.to('#exploreVideo', {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause reverse restart",
        start: "top 85%",
      },
      onComplete: () => {
        videoRef.current.play();
      }
    })
  }, []);

  animateWithGsap("#features", { y: 0, opacity: 1 }, { start: "top 85%" });
  animateWithGsap(".g_grow",
    { scale: 1, opacity: 1, ease: "power1" },
    { scrub: 5.5, start: "top 85%" }
  );
  animateWithGsap(".g_text", {
    y: 0,
    opacity: 1,
    ease: "power2.inout",
    duration: 1,
  });

  return (
    <div className="h-full common-padding bg-zinc relative overflow-hidden">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="features" className="section-heading">
            Explore the story
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center overflow-hidden">
          <div className="mt-32 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl font-semibold">iPhone</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">
              Forged in Titanium
            </h2>
          </div>
          <div className="flex-col flex-center sm:px-24">
            <div className="w-full h-[50vh] flex items-center ">
              <video
                className="pointer-events-none w-full h-full object-cover object-center"
                preload="none"
                autoPlay
                playsInline
                muted
                ref={videoRef}
                id="exploreVideo"
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>
            <div className="flex flex-col w-full relative">
              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[50vh]">
                <img src={explore1Img} alt="titanium" className="feature-video g_grow" />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={explore2Img}
                    alt="titanium 2"
                    className="feature-video g_grow"
                  />
                </div>
              </div>
              <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    iPhone 15 pro is {""}
                    <span className="text-white">
                      the finest iPhone to feature an aerospace-grade tatinium
                      design
                    </span>,
                    using the same alloy that space crafts use for missions to
                    Mars.
                  </p>
                </div>
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    Titanium has one of the best strength-to-weight ratios of any metal, making these our {""}
                    <span className="text-white">
                      lighest pro model ever
                    </span>
                    You'll notice the difference the moment you pick one up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
