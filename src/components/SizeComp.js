import React, {Component} from 'react'
import {Modal, Button} from 'react-bootstrap'


class SizeComp extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return (
            <React.Fragment>
                <Modal.Body>
                    <form onSubmit={e => { e.preventDefault(); }}>
                        <div>
                            <label> 1. How much data do you need to Migrate (in TB): </label>
                            <input type="number" id = 'migrationSize' value={this.props.migrationSize} onChange={this.props.handleChange}/>
                        </div>
                    </form>
                </Modal.Body>
            </React.Fragment>
        )
    }
}
export default SizeComp