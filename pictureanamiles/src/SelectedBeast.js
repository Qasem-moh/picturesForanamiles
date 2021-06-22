import React, { Component } from "react";

import { Button, Modal } from 'react-bootstrap';

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
    dialogImg(props) {

        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    App=()=> {
        const [modalShow, setModalShow] = React.useState(false);

        return (
            <>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    Launch vertically centered modal
                </Button>

                <dialogImg
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </>
        );
    }
    // render() {
    //     // console.log(this.state);
    //     return (
    //         <div id="divToRender">
    //             <h2>{this.props.title}</h2>
    //             <img src={this.props.image_url} alt={this.props.title} onClick={this.dialogImg} />
    //             <p>{this.props.description}</p>
    //             <button onClick={this.changeclicked}>click</button>
    //             <h6>{this.state.clicked}</h6>
    //         </div>
    //     );
    // }
    render()
}

export default SelectedBeast;
