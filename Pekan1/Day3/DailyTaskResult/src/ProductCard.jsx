// ProductCard.jsx
import React from "react";
import Card from "./Card";

function ProductCard({ productName, price, stock, isAvailable, image, onClick }) {
  return (
    <Card onClick={onClick}>
      <img
        src={image}
        alt={productName}
        style={{
          width: "100%",
          height: "160px",
          objectFit: "cover",
          borderRadius: "10px",
          marginBottom: "12px",
        }}
      />

      <h3 style={{ marginBottom: "8px" }}>{productName}</h3>
      <p><strong>Harga:</strong> Rp {price}</p>
      <p><strong>Stok:</strong> {stock}</p>
      <p>
        <strong>Status:</strong>{" "}
        <span style={{ color: isAvailable ? "green" : "red" }}>
          {isAvailable ? "Tersedia" : "Habis"}
        </span>
      </p>
    </Card>
  );
}

ProductCard.defaultProps = {
  price: 0,
  stock: 0,
  isAvailable: false,
  image: "https://via.placeholder.com/300x200?text=No+Image",
};

export default ProductCard;
