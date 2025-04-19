import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import About from "./pages/About";
import Strategy from "./pages/Strategy";
import Contact from "./pages/Contact";
import Clusters from "./pages/Clusters";
import ClusterInfo from "./pages/ClusterInfo";
import PressRelease from "./pages/PressRelease";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/strategy" element={<Strategy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/clusters" element={<Clusters />} />
          <Route path="/clusters/info" element={<ClusterInfo />} />
          <Route path="/pressRelease" element={<PressRelease />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
