import React, {Component} from 'react'
import {Modal, Button, Form} from 'react-bootstrap'
import compliances from '../data/complianceList'

class ComplianceComp extends Component{
    constructor(props){
        super(props)
        this.state = {

        }

        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(e){
        this.props.handleChange({target: {id: 'complianceTypes', type: e.target.id, value: e.target.checked}})
    }

    render(){
        let complianceTypes = [...this.props.complianceTypes]
        return (
            <React.Fragment>
                <Modal.Body>
                <label> 7. Compliance Requirements: </label>
                            <br/>
                <label> Select all that apply</label>
                    <Form onSubmit={e => { e.preventDefault(); }}>
                        {compliances.map(compliance => <Form.Check 
                                                inline label={compliance.name} 
                                                key={compliance.id} id={compliance.id} 
                                                type='checkbox' onChange = {this.handleChange} 
                                                checked={complianceTypes.indexOf(compliance.id.toString()) !== -1} />)}
                    </Form>
                </Modal.Body>
            </React.Fragment>
        )
    }
}
export default ComplianceComp
