import React, { useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import menuItems from "./data/menuItems";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const location = "Parigi";

  const filteredItems = menuItems.filter(item =>
    item.location === location &&
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = item => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div>
      <Header onSearch={setSearchTerm} cartItems={cartItems} />
      <Menu items={filteredItems} onAdd={handleAddToCart} />
    </div>
  );
}

export default App;
