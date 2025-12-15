//NO.1
import React from "react";

const ProfileCard = ({ name, photo, bio, skills }) => {
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "16px",
    width: "250px",
    textAlign: "center",
    backgroundColor: "#f9f9f9"
  };

  const photoStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px"
  };

  const skillItem = {
    background: "#eee",
    padding: "4px 8px",
    borderRadius: "6px",
    margin: "4px 0"
  };

  return (
    <div style={cardStyle}>
      <img src={photo} alt={name} style={photoStyle} />
      <h2>{name}</h2>
      <p>{bio}</p>

      <h4>Skills:</h4>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {skills.map((skill, index) => (
          <li key={index} style={skillItem}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileCard;