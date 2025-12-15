const FruitList = ({ fruits }) => {
  return (
    <div>
      <h2>Daftar Buah</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default FruitList;