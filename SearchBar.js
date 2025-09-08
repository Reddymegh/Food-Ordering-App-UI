function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search food..."
      onChange={(e) => onSearch(e.target.value)}
      style={{
        padding: "8px",
        width: "60%",
        fontSize: "16px",
        borderRadius: "4px",
        border: "1px solid #ccc"
      }}
    />
  );
}

export default SearchBar;
