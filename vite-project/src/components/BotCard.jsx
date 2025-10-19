import React from "react";

// Displays a single bot's summary info
const BotCard = ({ bot, onClick }) => {
  const { name, avatar_url, bot_class, health, damage, armor, catchphrase } =
    bot;

  return (
    <div className="bot-card" onClick={onClick}>
      <img src={avatar_url} alt={name} />
      <h3>{name}</h3>
      <p><em>{catchphrase}</em></p>
      <p>Class: {bot_class}</p>
      <p>⚔️ Damage: {damage} | 🛡️ Armor: {armor} | ❤️ Health: {health}</p>
    </div>
  );
};

export default BotCard;
