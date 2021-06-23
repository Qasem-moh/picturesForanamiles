import React from 'react';
import HornedBeast from '../HornedBeast'
// import hornsAnimalData from './hornsAnimalData.json'
import {  Row } from 'react-bootstrap'


class Main extends React.Component {



    render() {
        return (
          
            <Row>
                {
                    this.props.data.map((item, index)=> {
                        return (
                            <HornedBeast
                                key={index}
                                clicked={0}
                                title={item.title}
                                img_url={item.image_url}
                                description={item.description}
                                modal={this.props.selectedmodal}

                            />
                        )
                    })
                }
            </Row>
            //         </Card>
            //   </CardGroup>
            // </Container>
        )
    }

}

export default Main;