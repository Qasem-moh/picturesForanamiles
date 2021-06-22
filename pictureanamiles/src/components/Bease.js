import React, { Component } from "react";

class Bease extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: props.clicked,
    };
  }

  // changeclicked=()=>{
  //     this.setState({clicked:this.props.raisRequest(this.state.clicked)})
  // }
  changeclicked = () => {
    this.setState({
      clicked: this.state.clicked + 1,
    });
  };
  render() {
    console.log(this.state);
    return (
      <div id="divToRender">
        <h2>{this.props.title}</h2>
        <img src={this.props.image_url} alt={this.props.title} />
        <p>{this.props.description}</p>
        <button onClick={this.changeclicked}>click</button>
        <h6>{this.state.clicked}</h6>
      </div>
    );
  }
}

export default Bease;
