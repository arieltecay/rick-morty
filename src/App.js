import { useState } from "react";
import Caharacter from "./components/Caharacter";
import Header from "./components/Header";
import './main.scss'
function App() {
  const [character, setCharacter] = useState();
  return (
    <div className="App">
      <Header title={"Api Rick & Morty"} />
      <Caharacter />
    </div>
  );
}

export default App;
