import React, {Component} from 'react'
import {Modal, Button, Form} from 'react-bootstrap'
import protocols from '../data/protocolList'


class ProtocolTypeComp extends Component{
    constructor(props){
        super(props)
        this.state = {

        }

        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(e){
        this.props.handleChange({target: {id: 'protocolType', value: e.target.value}})
    }


    render(){
        return (
            <React.Fragment>
                <Modal.Body>
                <Form onSubmit={e => { e.preventDefault(); }}>
                    <Form.Group>
                        <Form.Label>6. File Protocols Used:</Form.Label>
                        <Form.Control as="select" onChange={this.handleChange} value = {this.props.protocolType}>
                            <option disabled="disabled" value=''>---Select an option---</option>
                            {protocols.map(protocol => <option key={protocol.id} value={protocol.id}> {protocol.name} </option>)}
                        </Form.Control>
                    </Form.Group>
                </Form>
                </Modal.Body>
            </React.Fragment>
        )
    }
}
export default ProtocolTypeComp
