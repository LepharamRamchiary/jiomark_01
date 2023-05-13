import React from "react";
import Navbar from "./Home/Navbar/Navbar";
import Slider from "./Home/Body/Slider";
import Poster from "./Home/Body/Poster";
import PosterHover from "./Home/Body/PosterHover";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider/>
      <Poster />
      <PosterHover />
    </div>
  );
}

export default App;
