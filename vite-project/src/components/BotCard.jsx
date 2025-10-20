import React from 'react';

const BotCard = ({ bot, onClick, onAddToArmy }) => {
  return (
    <div className="bot-card" onClick={onClick}>
      {/* Bot's avatar and basic information */}
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>{bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      
      {/* Button to enlist bot to the army */}
      <button onClick={(e) => { e.stopPropagation(); onAddToArmy(bot); }}>Enlist Bot</button>
    </div>
  );
};

export default BotCard;
