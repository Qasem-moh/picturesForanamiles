import React from 'react';
import hornsAnimalData from './hornsAnimalData.json'
import SelectedBeast from './SelectedBeast'
import Filter from './Filter'
import Headers from './components/header';
import Mains from './components/main';
import Footers from './components/footer';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      HornsData: hornsAnimalData,
      hornsFiltredArr: hornsAnimalData,
      show: false,
      ModalData: {},
    }
  }
  HandleShowImg = (data) => {
    this.setState({
      Show: true,
      ModalData: data,
    })
  }
  HandleCloseImg = () => {
    this.setState({
      Show: false,
    })

  }

  updateData = (value) => {
    this.setState({ hornsFiltredArr: value })
  }
  render() {
    return (
      <div style={{ background: 'lightwhite' }}>
        <Headers />
        <Filter
          filterData={this.updateData}
          HornsData={this.state.HornsData}

        />
        <Mains selectedmodal={this.HandleShowImg} data={this.state.hornsFiltredArr} updateData={this.updateData} />
        <SelectedBeast handleExit={this.HandleCloseImg} ShowData={this.state.Show} ModalData={this.state.ModalData} />
        <Footers />
      </div>
    )
  }
}
export default App;