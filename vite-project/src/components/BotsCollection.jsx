import React from 'react';
import BotCard from './BotCard';

const BotCollection = ({ bots, onSelect, onAddToArmy }) => {
  return (
    <div className="bot-collection">
      {/* Map through each bot and display it using BotCard */}
      {bots.map((bot) => (
        <BotCard 
          key={bot.id} 
          bot={bot} 
          onClick={() => onSelect(bot)} // Set selected bot on click
          onAddToArmy={() => onAddToArmy(bot)} // Add bot to army on click
        />
      ))}
    </div>
  );
};

export default BotCollection;
