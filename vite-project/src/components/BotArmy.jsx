import React from "react";
import BotCard from "./BotCard";

// Displays the user's bot army
const BotArmy = ({ army, onRemove, onDischarge }) => {
  return (
    <div className="bot-army">
      {army.length === 0 ? (
        <p>You don't have any bots enlisted yet.</p>
      ) : (
        army.map((bot) => (
          <div key={bot.id} className="bot-army-card">
            <BotCard bot={bot} />
            <div className="bot-army-actions">
              <button onClick={() => onRemove(bot)}>Remove from Army</button>
              <button onClick={() => onDischarge(bot)}>Discharge Forever</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BotArmy;
