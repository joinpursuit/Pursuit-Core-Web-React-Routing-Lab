import React from 'react';
import Random from "./components/Dogs/RandomImg.js"
import DisplayDog from "./components/Dogs/DisplayDog"
import GetDogByBreed from "./components/Dogs/dogByBreed"

function App() {
  return (
    <div className="App">
      <DisplayDog/>
      <Random/>
      <GetDogByBreed />
    </div>
  );
}

export default App;
