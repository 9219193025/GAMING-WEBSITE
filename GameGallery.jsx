import React from "react";

const games = [
  {id: 1, name: "Game one", img: "https://tse2.mm.bing.net/th?id=OIP.WF0MtbjeKPhoRUWP43N9DAHaEg&pid=Api&P=0&h=180" },
  {id: 2, name: "Game Two", img: "https://tse2.mm.bing.net/th?id=OIP.fb4AJuO3Lgb8hKFduKGCMQHaEK&pid=Api&P=0&h=180" },
  {id: 3, name: "Game Three", img: "http://wallpaperheart.com/wp-content/uploads/2018/08/4k-gaming-wallpaper-2.jpg" },
  {id: 4, name: "Game four", img: "https://tse2.mm.bing.net/th?id=OIP.qhvCstOg_q8JXKoDSsQ1PAHaEK&pid=Api&P=0&h=180" },
  {id: 5, name: "Game five", img: "https://tse4.mm.bing.net/th?id=OIP.RBvUQ5D6lb8GzYcpjT_VPAHaEo&pid=Api&P=0&h=180" },
  {id: 6, name: "Game six", img: "https://tse4.mm.bing.net/th?id=OIP.0y-kpwyiUg-8onU8kFG-cQHaEK&pid=Api&P=0&h=180" },
  {id: 7, name: "Game seven", img: "https://tse2.mm.bing.net/th?id=OIP.mNl9YmgcvMo9nXZCoNmJRAHaEh&pid=Api&P=0&h=180" },
  {id: 8, name: "Game eight", img: "https://tse1.mm.bing.net/th?id=OIP.NokTv-_eJP1zlCDuttkOewHaHa&pid=Api&P=0&h=180" },
  {id: 3, name: "Game nine", img: "https://tse3.mm.bing.net/th?id=OIP.tBiimJ7uOrYYFZfaA8m2aQHaEK&pid=Api&P=0&h=180" },  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
   


];


  

const GameGallery = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-8">
    {games.map((game) => (
      <div
        key={game.id}
        className="bg-gray-200 p-4 rounded shadow hover:shadow-lg transition-shadow"
      >
        <img
          src={game.img}
          alt={game.name}
          className="w-full h-40 object-cover rounded"
        />
        <h2 className="text-xl mt-2 font-semibold text-gray-800">{game.name}</h2>
        <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded shadow hover:bg-purple-600 transition-colors">
          Play Now
        </button>
      </div>
    ))}
  </div>
);
  

export default GameGallery;
