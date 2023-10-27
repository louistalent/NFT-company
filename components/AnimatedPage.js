import { motion as m } from "framer-motion";

const VideoAnimation = {
  hidden: {
    opacity: 1,
  },
  show: {
    transition: { delay: 2.5 },
    opacity: 0,
    transitionEnd: { display: "none" },
  },
  exit: {
    opacity: 0,
  },
};

const PageAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    transition: { delay: 1.5 },
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export default function AnimatedPage({ children }) {
  return (
    <>
      <m.video
        variants={VideoAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
        autoPlay
        loop
        muted
        style={{
          width: "100vw",
          zIndex: "999",
          position: "absolute",
          height: "100vh",
          objectFit: "cover",
        }}
      >
        <source src="/transition.webm" type="video/webm" />
      </m.video>
      <m.div
        variants={PageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        {children}
      </m.div>
    </>
  );
}
