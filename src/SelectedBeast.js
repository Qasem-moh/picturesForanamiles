import React, { Component } from 'react'
import { Card, Modal, Button } from 'react-bootstrap'

export class SelectedBeast extends Component {
    render() {
        return (
            <>
                <Modal show={this.props.ShowData}  >
                    <Modal.Header>
                        <Modal.Title style={{ alignItems: 'center' }}>{this.props.ModalData.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Card style={{ width: "80%", height: "100%", marginLeft: "7vh" }} bg={'pink'}>
                            <Card.Img width={200}
                                height={280} src={this.props.ModalData.img_url} alt={this.props.title} />
                            <Card.Body>

                                <Card.Text>
                                    {this.props.ModalData.description}
                                </Card.Text>
                            </Card.Body>




                        </Card>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleExit}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default SelectedBeast