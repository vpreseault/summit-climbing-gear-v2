import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Filter by Category</h3>
      <ul>
        {[
          "Ascenders and descenders",
          "Bouldering",
          "Carabiners and draws",
          "Climb accessories",
          "Climbing books",
          "Climbing clothing",
          "Climbing shoes",
          "Climbing harnesses",
          "Climbing helmets",
          "Climbing packs",
          "Indoor training",
          "Mountaineering and ice climbing",
          "Rock climbing",
          "Ropes, cords and slings",
        ].map((item) => (
          <li key={item}>
            <label>
              <input type="checkbox" /> {item}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
