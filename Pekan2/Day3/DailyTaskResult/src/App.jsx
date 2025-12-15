import SimpleEffect from "./SimpleEffect";
import UserInfo from "./UserInfo";
import WindowSizeTracker from "./WindowSizeTracker";
import MultipleEffects from "./MultipleEffects";
import FetchSimulation from "./FetchSimulation";
import { useState } from "react";

function App() {
  const [userId, setUserId] = useState(1);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>

      <hr />
      <SimpleEffect />

      <hr />
      <div>
        <h2>Ganti User ID</h2>
        <button onClick={() => setUserId(userId + 1)}>Next User</button>
        <UserInfo userId={userId} />
      </div>

      <hr />
      <WindowSizeTracker />

      <hr />
      <MultipleEffects />

      <hr />
      <FetchSimulation />
    </div>
  );
}

export default App;
