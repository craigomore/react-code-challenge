import React from 'react';

const BotSpecs = ({ bot, onEnlist, onBack }) => {
  return (
    <div className="bot-specs">
      {/* Back button to return to the bot collection */}
      <button onClick={onBack}>Back</button>
      
      {/* Bot details */}
      <h2>{bot.name}</h2>
      <p>{bot.catchphrase}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      
      {/* Button to enlist bot */}
      <button onClick={() => onEnlist(bot)}>Enlist Bot</button>
    </div>
  );
};

export default BotSpecs;
