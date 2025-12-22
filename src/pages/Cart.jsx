import { useCart } from "../hooks/useCart";

const Cart = () => {
  const { cart, removeFromCart, total } = useCart();

  if (cart.length === 0) {
    return <h3>Keranjang kosong</h3>;
  }

  return (
    <div>
      <h2>Keranjang</h2>

      {cart.map((item, index) => (
        <div key={index} className="card">
          <h4>{item.title}</h4>
          <p>${item.price}</p>

          <button onClick={() => removeFromCart(index)}>
            Hapus
          </button>
        </div>
      ))}

      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
