import React from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

export default function OrderSummary({ photo }) {

  const handlePayment = async () => {
    const amount = 10; // demo amount
    const res = await fetch("https://photoprintbackend.onrender.com/api/payment/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });
    const data = await res.json();
    window.location.href = data.url;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="p-6 max-w-lg mx-auto bg-white rounded-2xl shadow-2xl flex flex-col items-center"
    >
      <Confetti />
      <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
      <motion.img
        src={`https://photoprintbackend.onrender.com/uploads/${photo.filename}`}
        alt="selected"
        className="w-64 h-64 rounded-xl object-cover"
        whileHover={{ scale: 1.05 }}
      />
      <div className="mt-4 text-center">
        <p>Size: {photo.size}</p>
        <p>Paper: {photo.paperType}</p>
        <p className="font-semibold mt-2">Amount: $10</p>
      </div>
      <motion.button
        onClick={handlePayment}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-bold shadow-lg"
      >
        Pay Now
      </motion.button>
    </motion.div>
  );
}
