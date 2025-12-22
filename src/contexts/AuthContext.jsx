import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // load user login saat refresh
  useEffect(() => {
    const savedUser = localStorage.getItem("loginUser");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const register = (email, password) => {
    if (!email || !password) {
      return { success: false, message: "Semua field wajib diisi" };
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find((u) => u.email === email);
    if (exists) {
      return { success: false, message: "Email sudah terdaftar" };
    }

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));

    return { success: true };
  };

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const found = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!found) {
      return { success: false, message: "Email atau password salah" };
    }

    setUser({ email });
    localStorage.setItem("loginUser", JSON.stringify({ email }));

    return { success: true };
  };

  // ✅ FIX LOGOUT
  const logout = () => {
    setUser(null);
    localStorage.removeItem("loginUser");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLogin: !!user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
