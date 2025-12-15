// App.jsx
import React from "react";

import Greeting from "./Greeting";
import ProductCard from "./ProductCard";
import Card from "./Card";

import Comment from "./Comment/Comment";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Evaluasi Harian – Hari 3</h1>

      {/* GREETING */}
      <Greeting name="Budi" />

      {/* PRODUK */}
      <h2>Daftar Produk</h2>

      <ProductCard
        productName="Laptop Asus"
        price={7500000}
        stock={12}
        isAvailable={true}
        image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
        onClick={() => alert("Nothing Found!")}
      />

      <ProductCard
        productName="Mouse Logitech"
        image="https://images.unsplash.com/photo-1580894908361-9671950331e1?auto=format&fit=crop&w=500&q=60"
        onClick={() => alert("Nothing Found!")}
      />

      {/* CARD DENGAN CHILDREN */}
      <h2>Contoh Card</h2>

      <Card onClick={() => alert("Nothing Found!")}>
        <h3>Ini teks dalam Card</h3>
      </Card>

      <Card onClick={() => alert("Nothing Found!")}>
        <img src="https://via.placeholder.com/150" alt="contoh" />
      </Card>

      <Card onClick={() => alert("Nothing Found!")}>
        <button>Klik Saya</button>
      </Card>

      {/* COMMENT */}
      <h2>Comment</h2>
      <Comment
        user={{
          name: "Budi",
          avatarUrl: "https://via.placeholder.com/50"
        }}
        text="Ini adalah komentar dari Budi."
      />
    </div>
  );
}

export default App;
