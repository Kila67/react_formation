import React from 'react';
// import logo from './logo.svg';
import Button from './components/ui/button/Button'
import './App.css';


function App() {
  return (
    <div className="App">
      DEMAT BREIZH !!!
      <hr/>
      <Button>"Cliquez ici !!"</Button>
      <Button children="hello"/>
    </div>
  );
}

export default App;
