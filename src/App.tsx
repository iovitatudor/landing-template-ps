import React, {FC} from 'react';
import "./styles/desktop.scss";
import "./styles/mobile.scss";
import TopBar from "./components/TopBar";
import Banner from "./components/Banner";
import About from "./components/About";
import PeroTotal from "./components/PeroTotal";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import TopBarMobile from "./components/TopBarMobile";
import {BrowserView, MobileView} from 'react-device-detect';

const App: FC = () => {
  return (
    <div className="App">
      <MobileView>
        <TopBarMobile/>
      </MobileView>
      <BrowserView>
        <TopBar/>
      </BrowserView>
      <Banner/>
      <About/>
      <PeroTotal/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
