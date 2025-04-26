import { explore1Img, explore2Img, exploreVideo } from "../utils";
import { animateWithGsap } from "../utils/animation";
import { useRef } from "react";

const Features = () => {
  animateWithGsap("#features", { y: 0, opacity: 1 }, {start: "top 80%" });
  animateWithGsap("#exploreVideo", { y: 0 }, { start: "top 80%" });
    animateWithGsap(".g_grow", {scale: 1, opacity: 1, ease: 'power1' }, {scrub: 5.5});
  const videoRef = useRef();

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
                        <img
                            src={explore1Img}
                            alt="titanium"
                            className="featuere-video g_grow"
                        />
                    </div>
                    <div className="overflow-hidden flex-1 h-[50vh]">
                        <img
                            src={explore2Img}
                            alt="titanium"
                            className="featuere-video g_grow"
                        />
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
