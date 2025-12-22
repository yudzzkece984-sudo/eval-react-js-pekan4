import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../hooks/useCart";
import { useTheme } from "../contexts/ThemeContext";

const Navbar = () => {
  const { isLogin, logout } = useAuth();
  const { cart } = useCart();
  const { theme, toggleTheme } = useTheme(); // ✅ FIX DI SINI

  return (
    <nav className="navbar">
      <h2 className="logo">🛒 SiD STORE</h2>

      <div className="nav-links">
        <NavLink to="/products">Produk</NavLink>

        <NavLink to="/cart">
          Keranjang
          {cart.length > 0 && <span className="badge">{cart.length}</span>}
        </NavLink>

        {!isLogin && <NavLink to="/login">Login</NavLink>}
        {isLogin && <NavLink to="/checkout">Checkout</NavLink>}
      </div>

      <div className="nav-actions">
        <button className="btn-theme" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        {isLogin && (
          <button className="btn-logout" onClick={logout}>
            Keluar
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
