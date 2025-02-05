import React, { useState, useCallback } from "react";

/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 */
export default function Sidebar() {
  let [newMenuItem, setNewMenuItem] = useState("");

  // TODO: 2 Using a state hook, maintain the current menu items as an array state.
  let [menuItems, setMenuItems] = useState(["should i go to class", "should i skip class", "what is life", "did i do this right?"]);

  let [filter, setFilter] = useState("");

  // Adds a single string passed in as parameter to the state element "menuItems"
  // that holds the set of current menu items.
  let addMenuItem = useCallback(() => {
    console.log("Added menu item");
    // TODO: 3. Add a new menu item to the correct variable associated with this class.
    if (newMenuItem.trim() !== "") {
      setMenuItems([newMenuItem, ...menuItems]); // Adds the new item to the list
      setNewMenuItem(""); // Clear input field
    }
  }, [newMenuItem, menuItems]);

  // TODO: 4. Display ONLY the menu items that contain the filter element value "term" in them.
  // Each menu item should be an unordered list item wrapped in an unordered list (ul) element.
  const filteredMenuItems = menuItems.filter(item => item.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      {/* TODO 1: Render an unordered list of menu items */}
      <ul>
        {filteredMenuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
        placeholder="Add a new item..."
      />
      <br />
      <button onClick={addMenuItem}>Add Item</button>
      <br />
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      />
    </div>
  );
}
