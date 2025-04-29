import { useGSAP } from "@gsap/react";
import { chipImg, frameImg, frameVideo } from "../utils";
import gsap from "gsap";
import { useRef } from "react";

const Core = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
      },
      scale: 2,
      opacity: 0,
      duration: 1,
    });
  });
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="my-20 w-full flex-center">
          <img src={chipImg} alt="chipImg" width={180} height={180} />
        </div>
        <div className="flex flex-col items-center">
          <p className="hiw-title text-white">
            A 17 Pro chip,
            <br /> A monster win for gaming.
          </p>
          <p className="hiw-subtitle mt-10">
            Its here. The biggest redesign in the history of Apple GPUs.
          </p>
        </div>
        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
              <video
                autoPlay
                muted
                playsInline
                preload=""
                ref={videoRef}
                className="pointer-events-none"
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
            <p className="hiw-text text-center">Honkai: Star Rail</p>
        </div>
      </div>
    </section>
  );
};

export default Core;
