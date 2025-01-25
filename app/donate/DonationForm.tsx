"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function DonationForm() {
  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (integrate with payment processor)
    console.log("Donation amount:", amount || customAmount);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold mb-4 text-green-700">
        Make a Donation
      </h2>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="amount"
        >
          Select an amount:
        </label>
        <div className="grid grid-cols-3 gap-2">
          {["25", "50", "100"].map((value) => (
            <button
              key={value}
              type="button"
              className={`py-2 px-4 rounded ${
                amount === value
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setAmount(value)}
            >
              ${value}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="customAmount"
        >
          Or enter a custom amount:
        </label>
        <input
          type="number"
          id="customAmount"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter amount"
          value={customAmount}
          onChange={(e) => setCustomAmount(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
      >
        Donate Now
      </button>
    </motion.form>
  );
}
