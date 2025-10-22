import React from "react";

const BotCard = ({ bot, onClick, onAddToArmy }) => {
  if (!bot) return null; // Prevents render errors if bot is undefined

  return (
    <div className="bot-card" onClick={() => onClick(bot)}>
      {/* Bot avatar and details */}
      <img
        src={bot.avatar_url}
        alt={bot.name}
        className="bot-avatar"
        style={{ width: "120px", borderRadius: "10px" }}
      />
      <h3>{bot.name}</h3>
      <p>{bot.bot_class}</p>
      <p>❤️ Health: {bot.health}</p>
      <p>⚔️ Damage: {bot.damage}</p>
      <p>🛡️ Armor: {bot.armor}</p>

      {/* Button to enlist bot */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevents triggering onClick from the card
          onAddToArmy(bot);
        }}
      >
        Enlist Bot
      </button>
    </div>
  );
};

export default BotCard;
