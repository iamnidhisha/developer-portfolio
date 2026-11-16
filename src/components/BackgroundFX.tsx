import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect } from "react";

export default function BackgroundFX() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { stiffness: 90, damping: 20 });
  const springY = useSpring(y, { stiffness: 90, damping: 20 });

  useEffect(() => {
    const move = (event: MouseEvent) => {
      x.set(event.clientX - 180);
      y.set(event.clientY - 180);
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute -left-40 top-[-10rem] h-[34rem] w-[34rem] rounded-full bg-sky-500/15 blur-[130px]" />
      <div className="absolute -right-32 top-40 h-[28rem] w-[28rem] rounded-full bg-violet-600/15 blur-[130px]" />
      <div className="absolute bottom-[-12rem] left-1/3 h-[30rem] w-[30rem] rounded-full bg-cyan-500/10 blur-[140px]" />

      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute h-[22rem] w-[22rem] rounded-full bg-gradient-to-br from-sky-500/20 via-violet-500/15 to-transparent blur-[90px]"
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
    </div>
  );
}