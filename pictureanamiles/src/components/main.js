import React from "react";
import data from "./data.json";
import Bease from "./Bease";
import "../App.css";

class Mains extends React.Component {
  render() {
    return (
      <div>
        {/* <h1>{this.props.title}</h1>
        <img src={this.props.image_url} alt=""></img>
        <p>{this.props.dec}</p>
        <p>{this.props.kWord}</p>
        <p>{this.props.horns}</p> */}

        {data.map((beast) => {
          return (
            <Bease
              title={beast.title} //array[i].title
              image_url={beast.image_url}
              description={beast.description}
            />
          );
        })}
      </div>
    );
  }
}
export default Mains;
