import React from "react";
import Headers from "./components/header";
import Mains from "./components/main";
import Footers from "./components/footer";
import hornsAnimalData from './components/hornsAnimalData.json'
import SelectedBeast from './SelectedBeast'
// import data from "./components/data.json";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hornsData: hornsAnimalData,
      show: false,
      modaldata: {},
    }
  }
  handleshow = (data) => {
    this.setState({
      show: true,
      modaldata: data,
    })
  }
  handleclose = () => {
    this.setState({
      show: false,
    })
  }
  render() {
    return (
      <div style={{ background: 'lightwhite' }}>
        <Headers />
        <Mains selectedmodal={this.handleshow} data={this.state.hornsData} />
        <SelectedBeast handleExit={this.handleclose} showdata={this.state.show} modaldata={this.state.modaldata} />
        <Footers />
      </div>
    )
  }
}
export default App;