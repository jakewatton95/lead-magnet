import React, {Component} from 'react'
import {Modal, Button} from 'react-bootstrap'


class NetworkUtilComp extends Component{
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
                            <label> 10. (Optional) What is your average network Utilization (leave blank if you do not know): </label>
                            <input type="number" id = 'networkUtilization' value = {this.props.networkUtilization} onChange={this.props.handleChange}/>%
                        </div>
                    </form>
                </Modal.Body>
            </React.Fragment>
        )
    }
}
export default NetworkUtilComp