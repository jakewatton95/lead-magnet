import React, {Component} from 'react'
import {Modal, Form} from 'react-bootstrap'
import accesses from '../data/userAccessList'


class NetworkSpeedComp extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.props.handleChange({target: {id: 'userAccess', value: e.target.value}})
    }

    render(){
        return (
            <React.Fragment>
                <Modal.Body>
                    <Form onSubmit={e => { e.preventDefault(); }}>
                        <Form.Group>
                            <Form.Label>11. Will users need to access files during the migration?</Form.Label>
                            <Form.Control as="select" onChange={this.handleChange} value = {this.props.userAccess}>
                                <option disabled="disabled" value=''>---Select an option---</option>
                                {accesses.map(access => <option key={access.id} value={access.id}> {access.name} </option>)}
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </React.Fragment>
        )
    }
}
export default NetworkSpeedComp