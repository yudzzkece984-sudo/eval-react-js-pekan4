import ProfileCard from "./ProfileCard";
import MathExpression from "./MathExpression";
import UserStatus from "./UserStatus";
import FruitList from "./FruitList";

function App() {
  const wrapperStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",     // ⬅ tengah horizontal
    justifyContent: "center", // ⬅ tengah vertikal
    padding: "40px 20px",
    color: "white",
    fontFamily: "Arial, sans-serif",
    gap: "40px",              // jarak antar komponen
  };

  return (
    <div style={wrapperStyle}>
      <ProfileCard 
        name="SiDxBeelz"
        photo="https://via.placeholder.com/100"
        bio="React developer pemula."
        skills={["JavaScript", "React", "CSS"]}
      />

      <MathExpression />

      <UserStatus isLoggedIn={true} messages={3} />

      <FruitList fruits={["Apel", "Jeruk", "Mangga"]} />
    </div>
  );
}

export default App;
