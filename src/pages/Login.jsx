import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (isRegister) {
      const result = register(email, password);
      if (!result.success) {
        setError(result.message);
        return;
      }
      alert("Registrasi berhasil, silakan login");
      setIsRegister(false);
      setEmail("");
      setPassword("");
    } else {
      const result = login(email, password);
      if (!result.success) {
        setError(result.message);
        return;
      }
      navigate("/checkout");
    }
  };

  return (
    <div className="container" style={{ maxWidth: 400 }}>
      <h2>{isRegister ? "Daftar Akun" : "Login"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" style={{ width: "100%" }}>
          {isRegister ? "Daftar" : "Login"}
        </button>
      </form>

      <p style={{ marginTop: "1rem", textAlign: "center" }}>
        {isRegister ? (
          <>
            Sudah punya akun?{" "}
            <button onClick={() => setIsRegister(false)} style={linkBtn}>
              Login
            </button>
          </>
        ) : (
          <>
            Belum punya akun?{" "}
            <button onClick={() => setIsRegister(true)} style={linkBtn}>
              Daftar
            </button>
          </>
        )}
      </p>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "0.6rem",
  marginBottom: "0.8rem",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const linkBtn = {
  background: "none",
  border: "none",
  color: "#2563eb",
  cursor: "pointer",
  fontWeight: "bold",
};

export default Login;
