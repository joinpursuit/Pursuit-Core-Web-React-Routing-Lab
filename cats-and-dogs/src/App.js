import React from 'react';
import Random from "./components/Dogs/RandomImg.js"
import DisplayDog from "./components/Dogs/DisplayDog"

function App() {
  return (
    <div className="App">
      <DisplayDog/>
      <Random/>
    </div>
  );
}

export default App;
