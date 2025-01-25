"use client";

import { motion } from "framer-motion";

interface OpportunityCardProps {
  title: string;
  description: string;
  commitment: string;
}

export default function OpportunityCard({
  title,
  description,
  commitment,
}: OpportunityCardProps) {
  return (
    <motion.div
      className=" p-6 rounded-lg shadow-md dark:bg-slate-900"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-semibold  mb-2">{title}</h3>
      <p className="custom-text-color mb-4">{description}</p>
      <p className="text-sm text-gray-500">
        <strong>Time Commitment:</strong> {commitment}
      </p>
    </motion.div>
  );
}
