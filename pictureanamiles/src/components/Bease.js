import React, { Component } from "react";

class Bease extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: props.clicks,
    };
  }

  changeclicks = () => {
    this.setState({
      clicks: this.state.clicks + 1,
    });
  };
  render() {
    return (
      <div id="divToRender">
        <h2>{this.props.title}</h2>
        <img src={this.props.image_url} alt={this.props.title} />
        <p>{this.props.description}</p>
        <button onClick={this.props.changeclicks}>
          click {this.props.clicks}
        </button>
      </div>
    );
  }
}

export default Bease;
