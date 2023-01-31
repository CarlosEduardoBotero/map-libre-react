import { useState } from "react";
import Map from "./components/Map/Map";
import "./App.css";
import "maplibre-gl/dist/maplibre-gl.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Map />
    </div>
  );
}

export default App;
