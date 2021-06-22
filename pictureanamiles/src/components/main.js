import React from "react";
import data from "./data.json";
import SelectedBeast from "../SelectedBeast";
import "../App.css";
import { Row } from "react-bootstrap";

class Mains extends React.Component {
    render() {
        return (
            <Row>
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
            </Row>
        );
    }
}
export default Mains;
