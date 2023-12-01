import React, {FC} from 'react';
import "./styles/desktop.scss";
import "./styles/mobile.scss";
import TopBar from "./components/TopBar";
import Banner from "./components/Banner";
import About from "./components/About";
import Instructions from "./components/Instructions";
import PeroTotal from "./components/PeroTotal";
import Presale from "./components/Presale";
import Options from "./components/Options";
import PeroBottom from "./components/PeroBottom";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

const App: FC = () => {
  return (
    <div className="App">
      <TopBar/>
      <Banner/>
      <About/>
      <Instructions/>
      <PeroTotal/>
      <Presale/>
      <Options/>
      <PeroBottom/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
