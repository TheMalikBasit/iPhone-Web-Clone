import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "../Components/VideoCarousel";

export default function Highlights() {
  useGSAP(() => {
    gsap.to(
      "#title",
      {
        scrollTrigger: {
          trigger: "#title",
        },
        opacity: 1,
        y: 0,
      },
      []
    );
    gsap.to(
      ".link",
      {
        scrollTrigger: {
          trigger: ".link",
        },
        opacity: 1,
        delay: 0.25,
        y: 0,
        duration: 1,
        stagger: 0.25,
      },
      []
    );
  }, []);

  return (
    <section className="w-screen overflow-hidden bg-zinc h-full common-padding">
      <div className="secreen-max-width">
        <div className="w-full md:flex items-end justify-between mb-12">
          <h1 id="title" className="section-heading mb-3">
            Get the Highlights
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <img src={watchImg} alt="watchImg" className="ml-2" />
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} alt="rightImg" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
}
