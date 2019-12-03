import React, {Component} from 'react'
import {Modal, Form} from 'react-bootstrap'


class EmailEntryComp extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return (
            <React.Fragment>
                <Modal.Body>
                    <Form.Group onSubmit={e => { e.preventDefault(); }}>
                        <Form.Label>Enter your email to receive a full report on your next migration job:</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" id="email" onChange={this.props.handleChange}/>
                    </Form.Group>
                </Modal.Body>
            </React.Fragment>
        )
    }
}
export default EmailEntryComp