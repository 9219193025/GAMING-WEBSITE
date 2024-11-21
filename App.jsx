import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import GameGallery from "./pages/GameGallery";
import GameDetails from "./pages/GameDetails";
import Leaderboard from "./pages/Leaderboard";
import DarkModeToggle from './components/DarkModeToggle';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/games" element={<GameGallery />} />
      <Route path="/games/:id" element={<GameDetails />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
    </Routes>
    <DarkModeToggle />
  </Router>
);

export default App;
