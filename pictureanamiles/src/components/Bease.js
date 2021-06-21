import React, { Component } from "react";

export class Bease extends Component {
  render() {
    return (
      <div id="divToRender">
        <h2>{this.props.title}</h2>
        <img
          src={this.props.image_url}
          alt={this.props.title}
          onClick={this.changeCounter}
        />
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Bease;

