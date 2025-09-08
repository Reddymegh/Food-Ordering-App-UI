function Cart({ cartItems }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "8px", borderLeft: "1px solid #ccc", width: "30%" }}>
      <h3>🛒 Cart</h3>
      {cartItems.length === 0 ? (
        <p>No items added</p>
      ) : (
        <>
          {cartItems.map((item, i) => (
            <div key={i}>{item.name} - ₹{item.price}</div>
          ))}
          <p><strong>Total: ₹{total}</strong></p>
        </>
      )}
    </div>
  );
}

export default Cart;
