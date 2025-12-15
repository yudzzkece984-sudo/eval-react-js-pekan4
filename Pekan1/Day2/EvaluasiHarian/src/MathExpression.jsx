const MathExpression = () => {
  const price = 100000;
  const discount = 0.2;

  const getFinalPrice = () => price - price * discount;

  const name = "Yuzpix";

  return (
    <div>
      <h2>Hasil Operasi Matematika</h2>
      <p>Harga Awal: Rp {price}</p>
      <p>Diskon: {discount * 100}%</p>
      <p>Harga Setelah Diskon: <b>Rp {getFinalPrice()}</b></p>

      <h3>Manipulasi String</h3>
      <p>Halo, {name.toUpperCase()}! 👋</p>
    </div>
  );
};

export default MathExpression;
