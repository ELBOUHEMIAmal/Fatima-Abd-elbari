import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export function Envelope({
  onTap,
  onOpen,
}: {
  onTap: () => void;
  onOpen: () => void;
}) {
  const [opening, setOpening] = useState(false);
  const reducedMotion = useReducedMotion();
  const open = () => {
    if (opening) return;
    setOpening(true);
    onTap();
    window.setTimeout(onOpen, reducedMotion ? 50 : 1150);
  };
  return (
    <AnimatePresence>
      <motion.div
        className="envelope-screen"
        exit={{ opacity: 0, y: -60 }}
        transition={{ duration: reducedMotion ? 0.01 : 0.65 }}
      >
        {/* <p className="label envelope-topline ">WELCOME TO OUR WEDDING</p> */}
        <motion.button
          className={`envelope ${opening ? "opening" : ""}`}
          aria-label="Open your wedding invitation"
          onClick={open}
          disabled={opening}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={
            opening
              ? { opacity: 0, x: -24, rotateY: -82, scale: 0.94 }
              : { opacity: 1, scale: 1, rotateY: 0 }
          }
          transition={{
            duration: reducedMotion ? 0.01 : 0.9,
            ease: [0.32, 0.72, 0.24, 1],
          }}
          style={{ transformOrigin: "left center" }}
        >
          <img
            className="envelope-artwork"
            src="/images/envelope-cover.png"
            alt=""
          />
        </motion.button>
        {/* <p className="envelope-hint label">
          {opening ? "With love..." : "Tap to open"}
        </p> */}
      </motion.div>
    </AnimatePresence>
  );
}
