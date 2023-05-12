import React from "react";
import Navbar from "./Home/Navbar/Navbar";
import Slider from "./Home/Body/Slider";
import Poster from "./Home/Body/Poster";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider/>
      <Poster />
    </div>
  );
}

export default App;
