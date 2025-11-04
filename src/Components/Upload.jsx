import React, { useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

export default function Upload({ onUploaded }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [size, setSize] = useState("4x6");
  const [paper, setPaper] = useState("Glossy");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const f = e.target.files[0];
    setFile(f);
    setPreview(URL.createObjectURL(f));
  };

  const handleUpload = async () => {
    if (!file) return toast.error("Select a photo first");
    setLoading(true);
    const fd = new FormData();
    fd.append("photo", file);
    fd.append("size", size);
    fd.append("paperType", paper);
    try {
      const res = await axios.post("https://photoprintbackend.onrender.com/api/upload", fd);
      onUploaded(res.data.photo);
      toast.success("Photo uploaded successfully!");
    } catch (err) {
      toast.error("Upload failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="p-6 max-w-lg mx-auto bg-white rounded-2xl shadow-xl flex flex-col items-center"
    >
      <Toaster position="top-right" />
      <h2 className="text-2xl font-bold mb-4">Upload Your Photo</h2>
      <input type="file" accept="image/*" onChange={handleChange} className="border p-2 w-full rounded-lg" />
      <div className="mt-4 flex justify-between w-full">
        <div>
          <label className="mr-2 font-semibold">Size:</label>
          <select value={size} onChange={(e) => setSize(e.target.value)} className="border p-1 rounded-lg">
            <option value="4x6">4x6</option>
            <option value="5x7">5x7</option>
            <option value="8x10">8x10</option>
          </select>
        </div>
        <div>
          <label className="mr-2 font-semibold">Paper:</label>
          <select value={paper} onChange={(e) => setPaper(e.target.value)} className="border p-1 rounded-lg">
            <option>Glossy</option>
            <option>Matte</option>
          </select>
        </div>
      </div>

      {preview && (
        <motion.img
          src={preview}
          alt="preview"
          className="w-full h-64 mt-4 object-cover rounded-xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      )}

      <motion.button
        onClick={handleUpload}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`mt-4 w-full py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-xl shadow-md ${loading ? "opacity-50" : ""}`}
        disabled={loading}
      >
        {loading ? "Uploading..." : "Next"}
      </motion.button>
    </motion.div>
  );
}
