import { DummyMeme } from './interfaces/dummyMeme';
import { MemeInterface, MemeSVGViewer } from "orsys-tjs-meme";
import React from 'react';
import './App.css';
import MemeForm from './components/feature/MemeForm/MemeForm';
import FlexLayout from './components/layout/FlexLayout/FlexLayout';
import Footer from "./components/ui/Footer/Footer";
import Header from "./components/ui/Header/Header";

interface IAppState { meme: MemeInterface }
interface IAppProps { }

class App extends React.PureComponent<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props)
    this.state = { meme: DummyMeme };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <FlexLayout>
        <MemeSVGViewer image={undefined} meme={this.state.meme} />
          {/* <MemeForm/> */}
          <MemeForm 
            meme={this.state.meme} 
            onMemeValueChange={(newMeme: MemeInterface) => { 
              this.setState({ meme: newMeme }) }
            } />
        </FlexLayout>
        <Footer />
      </div>
    );
  }
}


export default App;
