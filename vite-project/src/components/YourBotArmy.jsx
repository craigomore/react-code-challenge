import React from "react";

const YourBotArmy = ({ bots = [], onRemove, onDelete }) => {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>

      {bots.length > 0 ? (
        <div className="bot-army-list">
          {bots.map((bot) => (
            <div key={bot.id} className="bot-in-army">
              <img
                src={bot.avatar_url}
                alt={bot.name}
                className="bot-avatar"
                style={{ width: "100px", borderRadius: "10px" }}
              />
              <h3>{bot.name}</h3>
              <p>{bot.bot_class}</p>
              <p>❤️ {bot.health} | ⚔️ {bot.damage} | 🛡️ {bot.armor}</p>

              <div className="army-buttons">
                <button onClick={() => onRemove(bot)}>Remove from Army</button>
                <button onClick={() => onDelete(bot.id)}>Discharge Bot</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No bots enlisted yet.</p>
      )}
    </div>
  );
};

export default YourBotArmy;
