import React from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";

export default function Success() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center p-10"
    >
      <Confetti />
      <h1 className="text-3xl font-bold text-green-600 mb-4">Payment Successful 🎉</h1>
      <p>Your photo order has been placed successfully!</p>
    </motion.div>
  );
}
