import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = (target, animationProps, scrollProps) => {
  useGSAP(() => {
    gsap.to(target, {
      ...animationProps,
      scrollTrigger: {
        trigger: target,
        toggleActions: 'restart reverse restart reverse',
        ...scrollProps,
      },
    }, [])
  }, []);
}


export const animateWithGsapTimeline = (
  timeline,
  rotationRef,
  rotationState,
  firstTarget,
  sccondTarget,
  animationProps
) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: "power2.inOut",
  });

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );

  timeline.to(
    sccondTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );
};
