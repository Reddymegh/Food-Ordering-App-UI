function Menu({ items, onAdd }) {
  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      padding: "20px",
      justifyContent: "center"
    }}>
      {items.map(item => (
        <div key={item.id} style={{
          border: "1px solid #ccc",
          padding: "10px",
          width: "220px",
          borderRadius: "8px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          textAlign: "center"
        }}>
          <img
            src={item.imageUrl}
            alt={item.name}
            style={{
              width: "100%",
              height: "150px",
              objectFit: "cover",
              borderRadius: "6px"
            }}
          />
          <h4 style={{ margin: "10px 0 5px" }}>{item.name}</h4>
          <p style={{ margin: "0 0 10px" }}>₹{item.price}</p>
          <button
            onClick={() => onAdd(item)}
            style={{
              padding: "6px 12px",
              backgroundColor: "#28a745",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer"
            }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Menu;
