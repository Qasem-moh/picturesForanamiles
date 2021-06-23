import React from "react";
// import data from "./data.json";
import SelectedBeast from "../SelectedBeast";
// import hornsAnimalData from './hornsAnimalData.json'

import "../App.css";
import { Row } from "react-bootstrap";

class Mains extends React.Component {
    render() {
        return (
            <Row>
                {this.props.data.map((beast, index) => {
                    return (
                        <SelectedBeast
                            key={index}
                            clicked={0}
                            title={beast.title}
                            image_url={beast.image_url}
                            description={beast.description}
                            modal={this.props.selectedmodal}

                        />
                    );
                })}
            </Row>
        );
    }
}
export default Mains;
