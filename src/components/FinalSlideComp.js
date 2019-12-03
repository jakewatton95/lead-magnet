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
                    Thank you for entering your information. We will email you a customized report about your next migration shortly. 
                    If you have any other questions about NAS migrations, send us an email at info@databloc.io!
                </Modal.Body>
            </React.Fragment>
        )
    }
}
export default EmailEntryComp