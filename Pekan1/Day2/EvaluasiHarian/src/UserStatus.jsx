const UserStatus = ({ isLoggedIn, messages }) => {
  return (
    <div>
      <h2>Status User</h2>

      {/* Ternary Operator */}
      <p>
        {isLoggedIn ? "Selamat datang kembali!" : "Silakan login terlebih dahulu."}
      </p>

      {/* Logical AND */}
      {messages > 0 && <p>Kamu punya {messages} pesan baru.</p>}
    </div>
  );
};

export default UserStatus;
