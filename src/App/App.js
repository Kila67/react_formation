import React from 'react';
// import logo from './logo.svg';
import Button from './components/ui/button/Button'
import './App.css';

class App extends React.PureComponent{
  counter=0;
  render(){
  return (
    <div className="App">
      Voici le nombre de clic : {this.counter}
      <hr/>
      <Button onButtonClick={()=>{
        this.counter --;
        console.log(this.counter);
        this.forceUpdate();
      }}>click -1</Button>
      <Button>click +1</Button>
    </div>
  );
  }
}

// function App() {
//   let counter=0;
//   return (
//     <div className="App">
//       Voici le nombre de clic : {counter}
//       <hr/>
//       <Button onButtonClick={()=>{
//         counter --;
//         console.log(counter);
//       }}>click -1</button>
//       <Button>click +1</Button>
//     </div>
//   );
// }

export default App;
