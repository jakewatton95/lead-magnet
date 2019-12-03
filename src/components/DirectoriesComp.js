import React, {Component} from 'react'
import {Modal, Button} from 'react-bootstrap'


class DirectoriesComp extends Component{
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
                            <label> 3. (Optional) How many directories do you need to migrate: </label>
                            <input type="number" value={this.props.numDirectories} id = 'numDirectories' onChange={this.props.handleChange}/>
                        </div>
                    </form>
                </Modal.Body>
            </React.Fragment>
        )
    }
}
export default DirectoriesComp