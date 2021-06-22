import React from "react";
import data from "./data.json";
import SelectedBeast from "../SelectedBeast";
import "../App.css";

class Mains extends React.Component {
    render() {
        return (
            <div>
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
