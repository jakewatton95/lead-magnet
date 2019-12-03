import React, {Component} from 'react'
import {Modal, Button, ProgressBar} from 'react-bootstrap'
import SizeComp from '../components/SizeComp.js'
import FilesComp from '../components/FilesComp.js'
import DirectoriesComp from '../components/DirectoriesComp'
import SourceTypeComp from '../components/SourceTypeComp'
import TargetTypeComp from '../components/TargetTypeComp'
import ProtocolTypeComp from '../components/ProtocolTypeComp'
import ComplianceComp from '../components/ComplianceComp'
import SecurityComp from '../components/SecurityComp'
import NetworkSpeedComp from '../components/NetworkSpeedComp'
import NetworkUtilComp from '../components/NetworkUtilComp'
import UserAccessComp from '../components/UserAccessComp'
import EmailEntryComp from '../components/EmailEntryComp'
import FinalSlideComp from '../components/FinalSlideComp'
import './MigrationForm.css'

class MigrationForm extends Component{
    constructor(props){
        super(props)
        this.state= {
            modalShow : true,
            slideNumber: 11,
            userEmail: '',
            migrationSize: '',
            numFiles: '',
            numDirectories: '',
            sourceTypes: [],
            targetTypes: [],
            protocolTypes: [],
            complianceTypes: [],
            security: '',
            networkSpeed: '',
            networkUtilization: '',
            userAccess: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleModalClose = this.handleModalClose.bind(this)
        this.nextSlide= this.nextSlide.bind(this) 
        this.prevSlide = this.prevSlide.bind(this)
        this.submitAnswers = this.submitAnswers.bind(this)
        this.submitEmail = this.submitEmail.bind(this)
        this.validateEmail = this.validateEmail.bind(this)
    }

    handleModalClose(){
        this.setState({
            modalShow: false
        })
    }

    handleChange(e){
        let {id, value} = e.target
        console.log(e.target)
        if (id == 'migrationSize') {
            this.setState({
                migrationSize: value
            })
        } else if (id == 'numFiles') {
            this.setState({
                numFiles: value
            })
        } else if (id == 'numDirectories') {
            this.setState({
                numDirectories: value
            })
        } else if (id == 'sourceTypes'){
            let newSources = [...this.state.sourceTypes]
            if (e.target.value){
                newSources.push(e.target.type)
            } else {
                newSources = newSources.filter(id => id != e.target.type)                
            }
            this.setState({
                sourceTypes: newSources
            })
        } else if (id == 'targetTypes'){
            let newSources = [...this.state.targetTypes]
            if (e.target.value){
                newSources.push(e.target.type)
            } else {
                newSources = newSources.filter(id => id != e.target.type)                
            }
            this.setState({
                targetTypes: newSources
            })
        } else if (id == 'protocolTypes'){
            let newSources = [...this.state.protocolTypes]
            if (e.target.value){
                newSources.push(e.target.type)
            } else {
                newSources = newSources.filter(id => id != e.target.type)                
            }
            this.setState({
                protocolTypes: newSources
            })
        } else if (id == 'complianceTypes'){
            let newSources = [...this.state.complianceTypes]
            if (e.target.value){
                newSources.push(e.target.type)
            } else {
                newSources = newSources.filter(id => id != e.target.type)                
            }
            this.setState({
                complianceTypes: newSources
            })
        } else if (id == 'security') {
            this.setState({
                security: value
            })
        } else if (id == 'networkSpeed') {
            this.setState({
                networkSpeed: value
            })
        } else if (id == 'networkUtilization') {
            this.setState({
                networkUtilization: value
            })
        } else if (id == 'userAccess') {
            this.setState({
                userAccess: value
            })
        } else if (id =='email') {
            this.setState({
                userEmail: value
            })
        }
    }

    renderSwitch(number) {
        switch(number){
            case 0: return <SizeComp handleChange={this.handleChange} migrationSize={this.state.migrationSize}/>
            case 1: return <FilesComp handleChange={this.handleChange} numFiles = {this.state.numFiles}/>
            case 2: return <DirectoriesComp handleChange={this.handleChange} numDirectories = {this.state.numDirectories}/>
            case 3: return <SourceTypeComp handleChange={this.handleChange} sourceTypes = {this.state.sourceTypes}/>
            case 4: return <TargetTypeComp handleChange={this.handleChange} targetTypes = {this.state.targetTypes}/>
            case 5: return <ProtocolTypeComp handleChange={this.handleChange} protocolTypes = {this.state.protocolTypes}/>
            case 6: return <ComplianceComp handleChange={this.handleChange} complianceTypes = {this.state.complianceTypes}/>
            case 7: return <SecurityComp handleChange={this.handleChange} security = {this.state.security}/>
            case 8: return <NetworkSpeedComp handleChange={this.handleChange} networkSpeed = {this.state.networkSpeed}/>
            case 9: return <NetworkUtilComp handleChange={this.handleChange} networkUtilization = {this.state.networkUtilization}/>
            case 10: return <UserAccessComp handleChange={this.handleChange} userAccess = {this.state.userAccess}/>
            case 11: return <EmailEntryComp handleChange={this.handleChange}/>
            case 12: return <FinalSlideComp/>
        }
    }

    nextSlide() {
        let newNumber = this.state.slideNumber + 1
        this.setState({
            slideNumber: newNumber
        })
    }

    submitAnswers(){
        //check for errors
        //store in DB without userinfo just to have 
        //ask for email to add to DB and hubspot
        this.nextSlide()

    }

    validateEmail(){
        let {userEmail} = this.state
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail))
        {
           return (true)
        }
           return (false)
    } 

    submitEmail(){
        //send email
        if (this.validateEmail()){
            const fullURL = "https://ffmn88dla3.execute-api.us-east-1.amazonaws.com/dev/vulnemail?email="+this.state.userEmail
            fetch(fullURL, {method: "POST"})
            .then(response => {
                this.nextSlide()
            })
            .catch(err => {
                console.log("ERR: " + err)
                alert("There was an Error Sending The Email" + err)
            })
        } else {
            alert("Please enter an email address in the correct format: name@website.com")
        }
    }


    prevSlide() {
        let newNumber = this.state.slideNumber - 1
        this.setState({
            slideNumber: newNumber
        })
    }

    render(){
        let {modalShow, slideNumber} = this.state
        const now = (100 * this.state.slideNumber / 11).toFixed(0)
        return (
        <React.Fragment>
            <Modal show={true} onHide={this.handleModalClose}>
                <Modal.Header>
                    <Modal.Title>Discover Your Vulnerabilities</Modal.Title>
                </Modal.Header>
                {this.renderSwitch(slideNumber)}
                {this.state.slideNumber < 12 && <ProgressBar striped variant="success" now={now} label={`${now}%`} />}
                <div className='infoNote'>Note: You may skip over questions, but you will need to fill out all required information before submitting.</div>
                <Modal.Footer>
                    {slideNumber > 0 && slideNumber < 12 && <Button variant="secondary" onClick = {this.prevSlide}>Previous</Button>}
                    {slideNumber < 10 && <Button variant = "primary" onClick = {this.nextSlide}> Next </Button>}
                    {slideNumber == 10 && <Button variant = "success" onClick = {this.submitAnswers}>Submit</Button>}
                    {slideNumber == 11 && <Button variant = "success" onClick = {this.submitEmail}> Get My Results!</Button>}
                </Modal.Footer>
            </Modal>
        </React.Fragment>
        )
    }
}

export default MigrationForm