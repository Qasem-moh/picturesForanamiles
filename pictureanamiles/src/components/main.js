import React from "react";

class Mains extends React.Component {
  render() {
 
    return (
      <div>
        <h1>{this.props.title}</h1>
        <img src={this.props.image_url} alt=""></img>
        <p>{this.props.dec}</p>
        <p>{this.props.kWord}</p>
        <p>{this.props.horns}</p>
      </div>
    );
  }
}
export default Mains;
