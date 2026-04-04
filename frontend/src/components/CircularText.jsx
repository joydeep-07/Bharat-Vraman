import { useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "motion/react";

const getRotationTransition = (duration, from, loop = true) => ({
  from,
  to: from + 360,
  ease: "linear",
  duration,
  type: "tween",
  repeat: loop ? Infinity : 0,
});

const getTransition = (duration, from) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: "spring",
    damping: 20,
    stiffness: 300,
  },
});

const CircularText = ({
  text,
  spinDuration = 20,
  onHover = "speedUp",
  className = "",
  centerContent,
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation = useMotionValue(0);

  useEffect(() => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start),
    });
  }, [spinDuration, text, onHover, controls, rotation]);

  const handleHoverStart = () => {
    const start = rotation.get();
    let transitionConfig;

    switch (onHover) {
      case "slowDown":
        transitionConfig = getTransition(spinDuration * 2, start);
        break;
      case "speedUp":
        transitionConfig = getTransition(spinDuration / 4, start);
        break;
      default:
        transitionConfig = getTransition(spinDuration, start);
    }

    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: transitionConfig,
    });
  };

  const handleHoverEnd = () => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start),
    });
  };

  return (
    <div
      className="relative border border-[var(--border-light)] bg-[var(--bg-secondary)] p-1 rounded-full 
                    w-[88px] h-[88px] 
                    sm:w-[100px] sm:h-[100px] 
                    md:w-[110px] md:h-[110px] 
                    mx-auto"
    >
      {/* 🔥 CENTER CONTENT (Music Button) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        {centerContent}
      </div>

      {/* 🔄 ROTATING TEXT */}
      <motion.div
        className={`
          m-0 rounded-full w-full h-full relative
          text-[var(--text-main)] 
          text-center 
          tracking-wider
          bg-[var(--bg-main)] 
          cursor-pointer font-medium origin-center
          ${className}
        `}
        style={{ rotate: rotation }}
        initial={{ rotate: 0 }}
        animate={controls}
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
      >
        {/* Inner border */}
        <div
          className="
            absolute inset-8 rounded-full
            border border-[var(--border-light)]
            pointer-events-none
          "
        />

        {letters.map((letter, i) => {
          const rotationDeg = (360 / letters.length) * i;
          const factor = Math.PI / letters.length;
          const x = factor * i;
          const y = factor * i;
          const transform = `rotateZ(${rotationDeg}deg) translate3d(${x}px, ${y}px, 0)`;

          return (
            <span
              key={i}
              className="
                absolute inline-block inset-0 tracking-wider
                text-[9px] sm:text-[11px] md:text-sm
                transition-all duration-500 
                ease-[cubic-bezier(0,0,0,1)]
              "
              style={{ transform, WebkitTransform: transform }}
            >
              {letter}
            </span>
          );
        })}
      </motion.div>
    </div>
  );
};

export default CircularText;
