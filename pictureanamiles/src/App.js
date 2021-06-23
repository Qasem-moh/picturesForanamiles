
import React from 'react';
import hornsAnimalData from './hornsAnimalData.json'
import SelectedBeast from './SelectedBeast'

import Headers from './components/header';
import Mains from './components/main';
import Footers from './components/footer';

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
        <Mains sselectedmodal={this.handleshow} data={this.state.hornsData} />
        <SelectedBeast handleExit={this.handleclose} showdata={this.state.show} modaldata={this.state.modaldata} />
        <Footers />
      </div>
    )
  }
}
export default App;