import React from "react";

const BotSpecs = ({ bot, onEnlist, onBack }) => {
  if (!bot) return <p>No bot selected.</p>; // Prevents rendering errors

  return (
    <div className="bot-specs">
      {/* Back button to return to bot collection */}
      <button onClick={onBack}>⬅ Back</button>

      {/* Bot details */}
      <div className="bot-details">
        <img
          src={bot.avatar_url}
          alt={bot.name}
          className="bot-avatar-large"
          style={{ width: "150px", borderRadius: "10px" }}
        />
        <h2>{bot.name}</h2>
        <p><em>{bot.catchphrase}</em></p>
        <p>❤️ Health: {bot.health}</p>
        <p>⚔️ Damage: {bot.damage}</p>
        <p>🛡️ Armor: {bot.armor}</p>
        <p>Class: {bot.bot_class}</p>
      </div>

      {/* Enlist button */}
      <button onClick={() => onEnlist(bot)}>Enlist Bot</button>
    </div>
  );
};

export default BotSpecs;
