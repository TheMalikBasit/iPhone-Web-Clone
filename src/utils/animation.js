import { time } from "three/tsl";

export const animateWithGsap = (
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
