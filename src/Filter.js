import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
// import { Container, CardGroup } from 'react-bootstrap'

export class Filter extends Component {
    updateForm = (e) => {
        let filteredArr = []
        if (e !== 'All') {
            filteredArr = this.props.HornsData.filter(value => {
                if (value.horns == e)
                    return value
            })
        } else
            filteredArr = this.props.HornsData;
        this.props.filterData(filteredArr)
    }

    updateHornsNum = event => {
        let NumOfHourns = event.target.value;
        this.updateForm(NumOfHourns)
    }


    render() {
        return (
            <>
                <Form style={{ textAlign: "center", marginTop: '10vh' }}>
                    <Form.Group controlId="exampleForm.SelectCustomHtmlSize">
                        <Form.Label >Select the number of horns</Form.Label>

                        <Form.Control style={{ marginLeft: '5vh' }} as="select" custom name='hornsNum' onChange={this.updateHornsNum}>
                            <option value='All'>All</option>
                            <option value='1 '>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='100'>100</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </>
        )
    }
}

export default Filter