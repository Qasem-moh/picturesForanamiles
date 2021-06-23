import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Button, Card, Col } from 'react-bootstrap'

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: props.clicked
        }
    }


    ChangeClick = () => {
        this.setState({
            clicked: this.state.clicked + 1,
        })
    }

    ShowMe = () => {
        this.props.modal({
            title: this.props.title,
            img_url: this.props.img_url,
            description: this.props.description
        })
    }
    render() {
        return (

            <Col xs={12} md={6} sm={9} xl={4} style={{ paddingTop: "10vh", paddingLeft: "10vh" }} >
                <Card style={{ width: "80%", height: "100%" }} bg={'red'}>
                    <Card.Img width={200}
                        height={280} onClick={this.ShowMe} variant="top" src={this.props.img_url} alt={this.props.title} />
                    <Card.Body>
                        <Card.Title style={{ alignItems: 'center' }} >{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                    </Card.Body>

                    <Button style={{ width: "50%", marginLeft: "10vh" }} variant="info" onClick={this.ChangeClick}> 👍 {this.state.clicked}</Button>
                    <Button style={{ width: "50%", marginTop: "2vh", marginBottom: '2vh', marginLeft: "10vh" }} variant="danger" onClick={this.ShowMe}> Show Me </Button>


                </Card>
            </Col>

        )
    }
}

export default HornedBeast;