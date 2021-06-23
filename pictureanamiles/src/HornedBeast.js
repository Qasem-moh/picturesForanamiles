import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Select } from 'react-bootstrap'


class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: props.clicked,

        }
    }


    changeclicked = () => {
        this.setState({
            clicked: this.state.clicked + 1,
        })
    }

    ShowMe = () => {
        let data = {
            title: this.props.title,
            img_url: this.props.img_url,
            description: this.props.description
        }
        this.props.modal(data)
        console.log()
    }
    render() {
        return (

            <Col xs={12} md={6} sm={9} xl={4} style={{ paddingTop: "10vh", paddingLeft: "10vh" }} >
                <Card style={{ width: "80%", height: "100%" }} bg={'pink'}>
                    <Card.Img width={200}
                        height={280} onClick={this.addVote0} variant="top" src={this.props.img_url} alt={this.props.title} />
                    <Card.Body>
                        <Card.Title style={{ alignItems: 'center' }} >{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                    </Card.Body>
                    <Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Select>

                    <Button style={{ width: "50%", marginLeft: "10vh" }} variant="secondary" onClick={this.changeclicked}> 👍 {this.state.clicked}</Button>
                    <Button style={{ width: "50%", marginTop: "2vh", marginBottom: '2vh', marginLeft: "10vh" }} variant="danger" onClick={this.ShowMe}> Click me </Button>


                </Card>
            </Col>

        )
    }
}

export default HornedBeast;