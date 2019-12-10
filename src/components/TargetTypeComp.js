import React, {Component} from 'react'
import {Modal, Button, Form} from 'react-bootstrap'
import brands from '../data/brandList.js'


class TargetTypeComp extends Component{
    constructor(props){
        super(props)
        this.state = {

        }

        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(e){
        this.props.handleChange({target: {id: 'targetTypes', type: e.target.id, value: e.target.checked}})
    }


    render(){
        let targetTypes = [...this.props.targetTypes]
        return (
            <React.Fragment>
                <Modal.Body>
                <label> 5. What is the brand of your target storage appliance? </label>
                            <br/>
                <label> Select all that apply</label>
                    <Form onSubmit={e => { e.preventDefault(); }}>
                        {brands.map(brand=><Form.Check 
                                                inline label={brand.name} 
                                                key={brand.id} id={brand.id} 
                                                type='checkbox' onChange = {this.handleChange} 
                                                checked={targetTypes.indexOf(brand.id.toString()) !== -1} />)}
                    </Form>
                </Modal.Body>
            </React.Fragment>
        )
    }
}
export default TargetTypeComp
