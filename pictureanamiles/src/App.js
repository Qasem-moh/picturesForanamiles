import React from "react";
import Headers from "./components/header";
import Mains from "./components/main";
import Footers from "./components/footer";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Headers counter={0} />
        <Mains />
        <Footers />
      </div>
    );
  }
}

export default App;
