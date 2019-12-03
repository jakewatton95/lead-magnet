import React, {Component} from 'react'
import {Modal, Button} from 'react-bootstrap'


class FilesComp extends Component{
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
                            <label> 2. (Optional) How many files do you need to Migrate: </label>
                            <input type="number" id = 'numFiles' value={this.props.numFiles} onChange={this.props.handleChange}/>
                        </div>
                    </form>
                </Modal.Body>
            </React.Fragment>
        )
    }
}
export default FilesComp