import { DummyMeme } from './interfaces/dummyMeme';
import {MemeSVGViewer} from 'orsys-tjs-meme';
import React from 'react';
import './App.css';
import MemeForm from './components/feature/MainForm/MainForm';
import FlexLayout from './components/layout/FlexLayout/FlexLayout';
// import MemeSvgViewer from './components/ui/SvgViewver/SvgViewver';
interface IAppState { }
interface IAppProps { }

class App extends React.PureComponent<IAppProps, IAppState> {
  render() {
    return (
      <div className="App">
        <FlexLayout>
          {/* <MemeSvgViewer/> */}
          <MemeSVGViewer image={undefined} meme={DummyMeme}/>
          <MemeForm/>
        </FlexLayout>
      </div>
    );
  }
}


export default App;
