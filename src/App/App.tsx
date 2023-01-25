import { DummyMeme } from './interfaces/dummyMeme';
import { MemeSVGViewer } from "orsys-tjs-meme";
import React from 'react';
import './App.css';
import MemeForm from './components/feature/MemeForm/MemeForm';
import FlexLayout from './components/layout/FlexLayout/FlexLayout';
import Footer from "./components/ui/Footer/Footer";
import Header from "./components/ui/Header/Header";
interface IAppState { }
interface IAppProps { }

class App extends React.PureComponent<IAppProps, IAppState> {
  render() {
    return (
      <div className="App">
        <Header />
        <FlexLayout>
        <MemeSVGViewer image={undefined} meme={DummyMeme} />
          <MemeForm/>
        </FlexLayout>
        <Footer />
      </div>
    );
  }
}


export default App;
