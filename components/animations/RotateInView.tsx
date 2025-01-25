"use client";

import { motion, useInView } from "framer-motion";
import { type ReactNode, useRef } from "react";

interface RotateInViewProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const RotateInView = ({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
}: RotateInViewProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, rotateY: 90 }}
      animate={
        isInView ? { opacity: 1, rotateY: 0 } : { opacity: 0, rotateY: 90 }
      }
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
