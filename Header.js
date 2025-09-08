import SearchBar from "./SearchBar";
import Cart from "./Cart";

function Header({ onSearch, cartItems }) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      padding: "10px",
      background: "#f8f8f8",
      borderBottom: "1px solid #ddd"
    }}>
      <SearchBar onSearch={onSearch} />
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default Header;
