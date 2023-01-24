import React from 'react';
// import logo from './logo.svg';
import Button from './components/ui/buttonts/Button'
import './App.css';
interface IAppState {
  counter:number
  uneValue:"hello"
}
interface IAppProps {}

class App extends React.PureComponent<IAppProps, IAppState>{
  counter=0;
  
  constructor(props:IAppProps){
    super(props);
    this.state={counter:0, uneValue:"hello"};
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
      }}
      // style={{backgroundColor:"steelblue"}}
      bgColor="steelblue"
      >click +1</Button>

      {/* test pour defaultProps avec une alert */}
      <Button  bgColor="tomato" style={{color:"blue"}}>test</Button> 

      <hr/>

      <Button 
        // type="reset"
        >Type de bouton</Button>

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
