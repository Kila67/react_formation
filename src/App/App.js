import React from 'react';
// import logo from './logo.svg';
import Button from './components/ui/button/Button'
import './App.css';

class App extends React.PureComponent{
  counter=0;
  
  constructor(props){
    super(props);
    this.state={counter:0};
  }

  componentDidUpdate(){
    console.log('apres la changement effectif de l\'etat :', this.state.counter )
    console.log(arguments);
  }

  render(){
  return (
    <div className="App">
      Voici le nombre de clic : {this.state.counter}
      <hr/>
      <Button onButtonClick={()=>{
        this.setState({counter: this.state.counter-1});
      }}>click -1</Button>
      <Button onButtonClick={()=>{
        this.setState({counter: this.state.counter+1});
      }}>click +1</Button>
      <Button>test</Button>
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
