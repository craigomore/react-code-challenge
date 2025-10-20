import React from 'react';

const YourBotArmy = ({ bots, onRemove, onDelete }) => {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {/* Map through the army and display each bot */}
      {bots.map((bot) => (
        <div key={bot.id} className="bot-in-army">
          <img src={bot.avatar_url} alt={bot.name} />
          <h3>{bot.name}</h3>

          {/* Remove bot from army */}
          <button onClick={() => onRemove(bot)}>Remove from Army</button>

          {/* Discharge bot (delete from backend and state) */}
          <button onClick={() => onDelete(bot.id)}>Discharge Bot</button>
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;
