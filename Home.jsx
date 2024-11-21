import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 min-h-screen text-white flex flex-col justify-center items-center space-y-8">
      {/* Animated Title */}
      <motion.h1
        className="text-4xl sm:text-6xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to Game Zone
      </motion.h1>

      {/* Subtext with delay */}
      <motion.p
        className="text-xl sm:text-2xl text-center max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Explore a world of exciting games! Check out our gallery for the latest
        games and leaderboards for top scores.
      </motion.p>

      {/* Button with hover effects */}
      <motion.a
        href="/games"
        className="px-6 py-3 bg-gray-800 rounded-full text-lg font-semibold hover:bg-gray-700 transition duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Explore Games
      </motion.a>
    </div>
  );
};

export default Home;
