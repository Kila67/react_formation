import React from 'react';
// import logo from './logo.svg';
import Button from './components/ui/button/Button'
import './App.css';


function App() {
  return (
    <div className="App">
      DEMAT BREIZH !!!
      <hr/>
      {/* Acces à l'image \img car on part de public en commencant "/"" */}
      <Button>Cliquez<br/>ici<img src="/img/red-cross.png" alt="cross" ></img></Button>
      <Button children="hello"/>
    </div>
  );
}

export default App;
