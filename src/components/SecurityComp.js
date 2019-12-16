import React, {Component} from 'react'
import {Modal, Form} from 'react-bootstrap'
import securityTypes from '../data/usingSecurityList'


class SecurityComp extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
        this.handleOptionChange = this.handleOptionChange.bind(this)

    }

    handleOptionChange(e){
        this.props.handleChange({target: {id: 'usingSecurity', value: e.target.value}})
    }

    render(){
        return (
            <React.Fragment>
                <Modal.Body>
                    <Form onSubmit={e => { e.preventDefault(); }}>
                        <Form.Group>
                        <Form.Label>8. Are you using Active Directory or other ACLs to manage access?</Form.Label>
                        <Form.Control as="select" onChange={this.handleOptionChange} value = {this.props.usingSecurity}>
                                <option disabled="disabled" value=''>---Select an option---</option>
                                {securityTypes.map(securityType => <option key={securityType.id} value={securityType.id}> {securityType.name} </option>)}
                        </Form.Control>                        
                        <Form.Label>(Optional) Please Describe:</Form.Label>
                        <Form.Control as="textarea" rows="3" id="security" value={this.props.security} onChange = {this.props.handleChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </React.Fragment>
        )
    }
}
export default SecurityComp