import { useCart } from "../hooks/useCart";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, total, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    alert("Checkout berhasil!");
    clearCart();
    navigate("/products");
  };

  if (cart.length === 0) {
    return <h3>Keranjang kosong</h3>;
  }

  return (
    <div>
      <h2>Checkout</h2>
      <p>Jumlah item: {cart.length}</p>
      <p>Total bayar: ${total.toFixed(2)}</p>

      <button onClick={handleCheckout}>
        Bayar Sekarang
      </button>
    </div>
  );
};

export default Checkout;
