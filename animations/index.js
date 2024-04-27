import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const stagger = (targets, speed, fromVars, toVars) => {
  return gsap.fromTo(
    targets,
    { autoAlpha: 0, ...fromVars },
    { autoAlpha: 1, ...toVars, stagger: speed, ease: Power3.easeOut },
  );
};

export const slide = (target, offset, mobOffset) => {
  return gsap.to(
    target, {
      scrollTrigger: {
        scrub: 1,
      },
      x: document.documentElement.scrollWidth < 768 ? document.documentElement.scrollWidth - mobOffset : document.documentElement.scrollWidth - offset,
    }
  );
};
