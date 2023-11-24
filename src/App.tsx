import React, {FC} from 'react';
import "./styles/desktop.scss";
import TopBar from "./components/TopBar";
import Banner from "./components/Banner";
import About from "./components/About";

const App: FC = () => {
  return (
    <div className="App">
      <TopBar/>
      <Banner/>
      <About/>
    </div>
  );
}

export default App;
