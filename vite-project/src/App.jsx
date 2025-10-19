import React, { useState, useEffect } from "react";
import BotsCollection from "./components/BotsCollection";
import BotArmy from "./components/BotArmy";


function App() {
  // Store all bots fetched from the backend
  const [bots, setBots] = useState([]);

  // Store the bots enlisted in the user's army
  const [army, setArmy] = useState([]);

  // Store the bot selected for viewing detailed info
  const [selectedBot, setSelectedBot] = useState(null);

  // Fetch bots data when the component mounts
  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((res) => res.json())
      .then((data) => setBots(data))
      .catch((err) => console.error("Error fetching bots:", err));
  }, []);

  // Function to add a bot to the army
  const enlistBot = (bot) => {
    // Prevent duplicates: only add if not already in the army
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  // Function to remove a bot from the army
  const removeBot = (bot) => {
    // Filter out the bot from the army
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  // Function to discharge a bot forever (from both frontend and backend)
  const dischargeBot = (bot) => {
    // Remove from army first
    removeBot(bot);

    // Then delete the bot from the backend
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: "DELETE",
    }).catch((err) => console.error("Error deleting bot:", err));
  };

  // Function to select a bot for viewing more details
  const handleBotClick = (bot) => {
    setSelectedBot(bot); // Sets the bot as selected to show more details
  };

  return (
    <div className="App">
      <h1>Bot Collection</h1>
      <BotsCollection bots={bots} onEnlist={enlistBot} onClick={handleBotClick} />
      <h2>Your Bot Army</h2>
      <BotArmy army={army} onRemove={removeBot} onDischarge={dischargeBot} />
      
      {/* Optional: Display detailed view of selected bot */}
      {selectedBot && (
        <div className="bot-specs">
          <h2>{selectedBot.name}</h2>
          <img src={selectedBot.avatar_url} alt={selectedBot.name} />
          <p><em>{selectedBot.catchphrase}</em></p>
          <p>Class: {selectedBot.bot_class}</p>
          <p>⚔️ Damage: {selectedBot.damage} | 🛡️ Armor: {selectedBot.armor} | ❤️ Health: {selectedBot.health}</p>
          <button onClick={() => enlistBot(selectedBot)}>Enlist</button>
        </div>
      )}
    </div>
  );
}

export default App;
