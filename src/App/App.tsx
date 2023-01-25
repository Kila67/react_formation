import { DummyMeme } from './interfaces/dummyMeme';
import { ImageInterface, MemeInterface, MemeSVGViewer } from "orsys-tjs-meme";
import React from 'react';
import './App.css';
import MemeForm from './components/feature/MemeForm/MemeForm';
import FlexLayout from './components/layout/FlexLayout/FlexLayout';
import Footer from "./components/ui/Footer/Footer";
import Header from "./components/ui/Header/Header";

interface IAppState { meme: MemeInterface, images:Array<ImageInterface> }
interface IAppProps { }

class App extends React.PureComponent<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props)
    this.state = { meme: DummyMeme, images:[
      {
        "id": 0,
        "url": "saitama.png",
        "w": 2640,
        "h": 2200,
        "name": "saitama"
      },
    ] };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <FlexLayout  style={{ height: '89vh' }}>
        <MemeSVGViewer basePath='/img/meme/' image={this.state.images.find(e=>e.id===this.state.meme.imageId)} meme={this.state.meme} />
          {/* <MemeForm/> */}
          <MemeForm 
            meme={this.state.meme}
            images={this.state.images} 
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
