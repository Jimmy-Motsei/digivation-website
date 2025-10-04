"use client";

import type { CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  delay?: number;
  style?: CSSProperties;
  children: React.ReactNode;
} & Record<string, unknown>;

// framer-motion exposes motion.[tag] for each intrinsic element; fall back to div when missing.
const motionElements = motion as unknown as Record<string, typeof motion.div>;

export function Reveal({
  as,
  className,
  delay = 0,
  style,
  children,
  ...rest
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const elementTag = as ?? "div";
  const MotionComponent = motionElements[elementTag] ?? motion.div;

  return (
    <MotionComponent
      className={className}
      style={style}
      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25, margin: "0px 0px -40px 0px" }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.6,
        delay: prefersReducedMotion ? 0 : delay / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
}
