import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
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





    clickme = () => {
        this.props.modal({
            title: this.props.title,
            image_url: this.props.image_url,
            description: this.props.description
        })
    }
    render() {
        // console.log(this.state);
        return (


            <Col xs={12} md={6} sm={9} xl={4} style={{ paddingTop: "10vh", paddingLeft: "10vh" }} >
                <Card style={{ width: "80%", height: "100%" }} bg={'pink'}>
                    <Card.Img width={200}
                        height={280} onClick={this.changeclicked} variant="top" src={this.props.image_url} alt={this.props.title} />
                    <Card.Body>
                        <Card.Title style={{ alignItems: 'center' }} >{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                    </Card.Body>
                    <Button style={{ width: "50%", marginLeft: "10vh" }} variant="secondary" onClick={this.changeclicked}> 👍{this.state.clicked}</Button>
                    <Button style={{ width: "50%", marginTop: "2vh", marginBottom: '2vh', marginLeft: "10vh" }} variant="danger" onClick={this.clickme}> Show Img </Button>
                </Card>
            </Col>
        );
    }
}

export default SelectedBeast;
