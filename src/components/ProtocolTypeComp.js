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
        this.props.handleChange({target: {id: 'protocolTypes', type: e.target.id, value: e.target.checked}})
    }


    render(){
        let protocolTypes = [...this.props.protocolTypes]
        return (
            <React.Fragment>
                <Modal.Body>
                <label> 6. File Protocols Used: </label>
                            <br/>
                <label> Select all that apply</label>
                    <Form onSubmit={e => { e.preventDefault(); }}>
                        {protocols.map(protocol=><Form.Check 
                                                inline label={protocol.name} 
                                                key={protocol.id} id={protocol.id} 
                                                type='checkbox' onChange = {this.handleChange} 
                                                checked={protocolTypes.indexOf(protocol.id.toString()) !== -1} />)}
                    </Form>
                </Modal.Body>
            </React.Fragment>
        )
    }
}
export default ProtocolTypeComp
