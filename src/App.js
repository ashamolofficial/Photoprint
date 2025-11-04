import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Upload from "./Components/Upload";
import OrderSummary from "./Components/OrderSummary";
import Success from "./Pages/Success";
import Cancel from "./Pages/Cancel";

function App() {
  const [photo, setPhoto] = useState(null);

  return (
    <Router>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center p-6 bg-gray-100 mt-10">
        <Routes>
          <Route path="/" element={!photo ? <Upload onUploaded={setPhoto} /> : <OrderSummary photo={photo} />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
