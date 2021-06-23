import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Button, Card, Col } from 'react-bootstrap'




class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            clicked: props.clicked,

        }
    }



           
        }
    }

    changeclicked = () => {
        this.setState({
            clicked: this.state.clicked + 1,
        });
    };
    addVote0 = () => {
        this.setState({
            numberVotes: this.state.numberVotes + 1,

        })
    }

    S
    render() {
        return (

            <Col xs={12} md={6} sm={9} xl={4} style={{ paddingTop: "10vh", paddingLeft: "10vh" }} >

                <Card style={{ width: "80%", height: "100%" }} bg={'lightblue'}>
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

                    <Button style={{ width: "50%", marginLeft: "10vh" }} variant="info" onClick={this.changeclicked}> 👍 {this.state.clicked}</Button>
                    <Button style={{ width: "50%", marginTop: "2vh", marginBottom: '2vh', marginLeft: "10vh" }} variant="danger" onClick={this.ShowMe}> Show Img </Button>



                </Card>
            </Col>

        )
    }
}

export default HornedBeast;