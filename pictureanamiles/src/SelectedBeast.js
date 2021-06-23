import React, { Component } from "react";
import { Card, Button, Col } from 'react-bootstrap'

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
            <Col class="col-sm">
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
            </Col>
            
        );
    }
}

export default SelectedBeast;
