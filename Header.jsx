import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <nav className="bg-gray-800 text-white p-4 flex justify-between">
    <h1 className="text-2xl font-bold">Gaming World</h1>
    <div>
      <Link to="/" className="mr-4 hover:text-yellow-400">Home</Link>
      <Link to="/games" className="mr-4 hover:text-yellow-400">Games</Link>
      <Link to="/leaderboard" className="hover:text-yellow-400">Leaderboard</Link>
    </div>
  </nav>
);

export default Header;
