import React, {Component} from 'react'
import {Modal, Form} from 'react-bootstrap'

class SecurityComp extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return (
            <React.Fragment>
                <Modal.Body>
                <label> 8. (Optional) Are you using ACLs or Active Directory? Please Describe: </label>
                    <Form onSubmit={e => { e.preventDefault(); }}>
                        <Form.Group>
                        <Form.Control as="textarea" rows="3" id="security" value={this.props.security} onChange = {this.props.handleChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </React.Fragment>
        )
    }
}
export default SecurityComp