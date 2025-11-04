import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 flex justify-between items-center shadow-lg"
    >
      <h1 className="text-2xl font-bold tracking-wider">PhotoPrint</h1>
      <div className="space-x-4">
        <a href="/" className="hover:text-gray-200 transition-colors">Home</a>
      </div>
    </motion.nav>
  );
}
