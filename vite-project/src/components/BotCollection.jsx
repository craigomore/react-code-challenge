import React from "react";
import BotCard from "./BotCard";

const BotCollection = ({ bots = [], onSelect, onAddToArmy }) => {
  return (
    <div className="bot-collection">
      {bots.length > 0 ? (
        bots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            onClick={() => onSelect(bot)}
            onAddToArmy={() => onAddToArmy(bot)}
          />
        ))
      ) : (
        <p>Loading bots...</p>
      )}
    </div>
  );
};

export default BotCollection;
