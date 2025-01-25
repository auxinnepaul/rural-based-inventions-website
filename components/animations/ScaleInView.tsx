"use client";

import { motion, useInView } from "framer-motion";
import { type ReactNode, useRef } from "react";

interface ScaleInViewProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const ScaleInView = ({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
}: ScaleInViewProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
