import React from "react";

class Headers extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome in My App</h1>
        <h2>favorite img: {this.props.counter}</h2>
      </div>
    );
  }
}

export default Headers;
