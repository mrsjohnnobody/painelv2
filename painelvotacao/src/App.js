import "./App.css";
import React, { useState, useEffect } from "react";

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home/Home";
import Ordens from "./pages/Ordens/Ordens";
import Painel from "./pages/Painel/Painel";
import Config from "./pages/Config/Config";
import User from "./pages/User/User";
import Logs from "./pages/Logs/Logs";
import Help from "./pages/Help/Help";
import Call from "./pages/Call/Call";
import EditOrdem from "./pages/EditOrdem/EditOrdem";
import Votacao from "./pages/Votacao/Votacao";
import Leitura from "./pages/Leitura/Leitura";
import Quorum from "./pages/Quorum/Quorum";
import Relatorio from "./pages/Relatorio/Relatorio";
import Timer from "./pages/Timer/Timer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ordens" element={<Ordens />} />
            <Route path="/editordem" element={<EditOrdem />} />
            <Route path="/votacao" element={<Votacao />} />
            <Route path="/painel" element={<Painel />} />
            <Route path="/config" element={<Config />} />
            <Route path="/user" element={<User />} />
            <Route path="/logs" element={<Logs />} />
            <Route path="/help" element={<Help />} />
            <Route path="/call" element={<Call />} />
            <Route path="/timer" element={<Timer />} />
            <Route path="/leitura" element={<Leitura />} />
            <Route path="/quorum" element={<Quorum />} />
            <Route path="/relatorio" element={<Relatorio />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
