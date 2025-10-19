import React from "react";
import BotCard from "./BotCard";

// Displays all bots in a grid format
const BotCollection = ({ bots, onSelect }) => {
  return (
    <div className="bot-collection">
      <h2>Available Bots</h2>
      <div className="bot-grid">
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} onClick={() => onSelect(bot)} />
        ))}
      </div>
    </div>
  );
};

export default BotsCollection;
