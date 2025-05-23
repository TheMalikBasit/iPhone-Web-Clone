import { useGSAP } from "@gsap/react";
import { chipImg, frameImg, frameVideo } from "../utils";
import gsap from "gsap";
import { useRef } from "react";
import { animateWithGsap } from "../utils/animation";

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
  
  animateWithGsap(".g_fadeIn", {y: 0, duration: 1.5, opacity: 1,}, {start: "top 85%"});
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

        <div className="hiw-text-container">
          <div className="flex flex-1 justify-center flex-col">
            <p className="hiw-text g_fadeIn">
              A17 Pro is an entirely new class of iPhone chip that deliveres{" "}
              <span className="text-white">
                our best graphic performance by far
              </span>
            </p>
            <p className="hiw-text g_fadeIn">
              Mobile{" "}
              <span className="text-white">
                games will look and feel so immersive, {" "}
              </span>
              with incredibly detailed enviorments and features.
            </p>
          </div>
          <div className="flex-1 flex justify-center flex-col g_fadeIn">
            <p className="hiw-text ">New</p>
            <p className="hiw-bigtext">Pro-class GPU</p>
            <p className="hiw-text ">with 6 cores.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Core;
