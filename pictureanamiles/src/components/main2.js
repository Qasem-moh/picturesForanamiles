import React from "react";
import data from "./data.json";
// import Bease from "./Bease";
import SelectedBeast from "../SelectedBeast";
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

        {/* {data.map((beast, index) => {
          return (
            <Bease
              key={index}
              clicked={0}
              title={beast.title}
              image_url={beast.image_url}
              description={beast.description}
            />
          );
        })} */}

        {data.map((beast, index) => {
          return (
            <SelectedBeast
              key={index}
              clicked={0}
              title={beast.title}
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
