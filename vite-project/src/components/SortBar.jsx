import React from "react";

const SortBar = ({ onSort }) => {
  return (
    <div className="sort-bar">
      <h3>Sort Bots By:</h3>
      <div className="sort-buttons">
        <button onClick={() => onSort("health")}>❤️ Health</button>
        <button onClick={() => onSort("damage")}>⚔️ Damage</button>
        <button onClick={() => onSort("armor")}>🛡️ Armor</button>
      </div>
    </div>
  );
};

export default SortBar;
