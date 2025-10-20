import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';
import SortBar from './components/SortBar';

const App = () => {
  // State for holding bot data and user's army
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null); // Currently selected bot for detailed view
  const [sortBy, setSortBy] = useState(null); // Sorting criteria (health, damage, armor)
  const [filters, setFilters] = useState([]); // Filters for bot classes (Support, Medic, etc.)

  // Fetching bots data from the backend (json-server) on component mount
  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then((res) => res.json())
      .then((data) => setBots(data)); // Set the bot data in state
  }, []);

  // Handle sorting by selected criteria (health, damage, armor)
  const handleSort = (criteria) => {
    setSortBy(criteria); // Set the sorting criteria
    const sortedBots = [...bots].sort((a, b) => b[criteria] - a[criteria]);
    setBots(sortedBots); // Update the bots with sorted data
  };

  // Toggle the filter by bot class (Support, Medic, etc.)
  const toggleFilter = (className) => {
    setFilters((prev) =>
      prev.includes(className) ? prev.filter((c) => c !== className) : [...prev, className]
    );
  };

  // Filter the bots by the selected classes
  const filteredBots = bots.filter((bot) =>
    filters.length === 0 || filters.includes(bot.bot_class)
  );

  // Add a bot to the army if not already enlisted
  const addToArmy = (bot) => {
    if (army.some((b) => b.id === bot.id)) return; // Ensure bot is not already in the army
    setArmy([...army, bot]); // Add bot to the army
  };

  // Remove a bot from the army
  const removeFromArmy = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id)); // Filter out the bot to be removed
  };

  // Delete a bot from the backend and state
  const deleteBot = (botId) => {
    fetch(`http://localhost:8001/bots/${botId}`, {
      method: 'DELETE', // HTTP DELETE request
    }).then(() => {
      // Remove the bot from both army and bot list
      setArmy(army.filter((bot) => bot.id !== botId));
      setBots(bots.filter((bot) => bot.id !== botId));
    });
  };

  return (
    <div>
      <h1>Bot Battlr</h1>

      {/* SortBar allows users to sort bots */}
      <SortBar onSort={handleSort} />

      {/* Filter buttons for bot classes */}
      <div>
        <button onClick={() => toggleFilter('Support')}>Filter Support</button>
        <button onClick={() => toggleFilter('Medic')}>Filter Medic</button>
        <button onClick={() => toggleFilter('Assault')}>Filter Assault</button>
        <button onClick={() => toggleFilter('Defender')}>Filter Defender</button>
        <button onClick={() => toggleFilter('Captain')}>Filter Captain</button>
        <button onClick={() => toggleFilter('Witch')}>Filter Witch</button>
      </div>

      <div className="main-content">
        {/* Show selected bot details or the bot collection */}
        {selectedBot ? (
          <BotSpecs bot={selectedBot} onEnlist={addToArmy} onBack={() => setSelectedBot(null)} />
        ) : (
          <BotCollection bots={filteredBots} onSelect={setSelectedBot} onAddToArmy={addToArmy} />
        )}

        {/* Render the user's army */}
        <YourBotArmy bots={army} onRemove={removeFromArmy} onDelete={deleteBot} />
      </div>
    </div>
  );
};

export default App;
