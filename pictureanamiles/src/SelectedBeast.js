import React, { Component } from "react";
import { Card, Button} from 'react-bootstrap'

class SelectedBeast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: props.clicked,
        };
    }

    changeclicked = () => {
        this.setState({
            clicked: this.state.clicked + 1,
        });
    };
   
    render() {
        // console.log(this.state);
        return (
            <Card style={{ width: '18rem' }} bg={'dark'} text={'white'}>
                <Card.Img variant="top" src={this.props.image_url} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            // <div id="divToRender">
            //     <h2>{this.props.title}</h2>
            //     <img src={this.props.image_url} alt={this.props.title} onClick={this.dialogImg} />
            //     <p>{this.props.description}</p>
            //     <button onClick={this.changeclicked}>click</button>
            //     <h6>{this.state.clicked}</h6>
            // </div>
        );
    }
}

export default SelectedBeast;
