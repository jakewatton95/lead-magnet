import React, {Component} from 'react'
import {Modal, Form} from 'react-bootstrap'
import networkSpeeds from '../data/networkSpeedList'


class NetworkSpeedComp extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.props.handleChange({target: {id: 'networkSpeed', value: e.target.value}})
    }

    render(){
        return (
            <React.Fragment>
                <Modal.Body>
                    <Form onSubmit={e => { e.preventDefault(); }}>
                        <Form.Group>
                            <Form.Label>9. What is your Network Speed</Form.Label>
                            <Form.Control as="select" onChange={this.handleChange} value = {this.props.networkSpeed}>
                                <option disabled="disabled" value=''>---Select an option---</option>
                                {networkSpeeds.map(speed => <option key={speed.id} value={speed.id}> {speed.name} </option>)}
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </React.Fragment>
        )
    }
}
export default NetworkSpeedComp