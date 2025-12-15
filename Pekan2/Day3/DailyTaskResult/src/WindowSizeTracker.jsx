import { useEffect, useState } from "react";

function WindowSizeTracker() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h2>Window Size Tracker</h2>
      <p>Lebar: {size.width}px</p>
      <p>Tinggi: {size.height}px</p>
    </div>
  );
}

export default WindowSizeTracker;
