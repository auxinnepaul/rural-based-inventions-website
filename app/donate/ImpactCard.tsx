"use client";

import { motion } from "framer-motion";

interface ImpactCardProps {
  amount: string;
  description: string;
}

export default function ImpactCard({ amount, description }: ImpactCardProps) {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold text-green-700 mb-2">{amount}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}
