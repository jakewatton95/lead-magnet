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
import ReportBlurbs from '../data/reportGenerationData'
import './MigrationForm.css'

class MigrationForm extends Component{
    constructor(props){
        super(props)
        this.state= {
            errorState: false,
            modalShow : true,
            slideNumber: 0,
            userEmail: '',
            migrationSize: '',
            numFiles: '',
            numDirectories: '',
            sourceTypes: [],
            targetTypes: [],
            protocolType: '',
            complianceTypes: [],
            usingSecurity: '',
            security: '',
            networkSpeed: '',
            networkUtilization: '',
            userAccess: '',
            dataLossSources: [],
            overTimeSources: [],
            overBudgetSources: [],
            complianceSources: [],
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleModalClose = this.handleModalClose.bind(this)
        this.nextSlide= this.nextSlide.bind(this) 
        this.prevSlide = this.prevSlide.bind(this)
        this.submitAnswers = this.submitAnswers.bind(this)
        this.submitEmail = this.submitEmail.bind(this)
        this.validateEmail = this.validateEmail.bind(this)
        this.hasError = this.hasError.bind(this)
        this.calculateComplianceScore = this.calculateComplianceScore.bind(this)
        this.calculateDataLossScore = this.calculateDataLossScore.bind(this)
        this.calculateOverBudgetScore = this.calculateOverBudgetScore.bind(this)
        this.calculateOverTimeScore = this.calculateOverTimeScore.bind(this)
        this.generateReport = this.generateReport.bind(this)
        this.generateComplianceBlurb = this.generateComplianceBlurb.bind(this)
        this.generateDataLossBlurb = this.generateDataLossBlurb.bind(this)
        this.generateOverBudgetBlurb = this.generateOverBudgetBlurb.bind(this)
        this.generateOverTimeBlurb = this.generateOverTimeBlurb.bind(this)
    }

    handleModalClose(){
        this.setState({
            modalShow: false
        })
    }

    handleChange(e){
        let {id, value} = e.target
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
        } else if (id == 'protocolType'){
            this.setState({
                protocolType: value
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
        } else if (id == 'usingSecurity'){
            this.setState({
                usingSecurity: value
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
            case 5: return <ProtocolTypeComp handleChange={this.handleChange} protocolType = {this.state.protocolType}/>
            case 6: return <ComplianceComp handleChange={this.handleChange} complianceTypes = {this.state.complianceTypes}/>
            case 7: return <SecurityComp handleChange={this.handleChange} usingSecurity = {this.state.usingSecurity} security = {this.state.security}/>
            case 8: return <NetworkSpeedComp handleChange={this.handleChange} networkSpeed = {this.state.networkSpeed}/>
            case 9: return <NetworkUtilComp handleChange={this.handleChange} networkUtilization = {this.state.networkUtilization}/>
            case 10: return <UserAccessComp handleChange={this.handleChange} userAccess = {this.state.userAccess}/>
            case 11: return <EmailEntryComp handleChange={this.handleChange}/>
            case 12: return <FinalSlideComp/>
        }
    }

    hasError(slideNum){
        switch(slideNum){
            case 0: return (this.state.migrationSize == '')
            case 1: return false
            case 2: return false
            case 3: return (this.state.sourceTypes.length == 0)
            case 4: return (this.state.targetTypes.length == 0)
            case 5: return (this.state.protocolType == '')
            case 6: return (this.state.complianceTypes.length == 0)
            case 7: return (this.state.usingSecurity == '')
            case 8: return (this.state.networkSpeed == '')
            case 9: return false
            case 10: return (this.state.userAccess == '')
            case 11: return false
            default: return false
        }
    }

    nextSlide() {
        if (this.hasError(this.state.slideNumber)){
            this.setState({
                errorState: true
            })
            return false
        } else {
            let newNumber = this.state.slideNumber + 1
            this.setState({
                slideNumber: newNumber,
                errorState: false
            })
            return true
        }
    }

    async calculateComplianceScore() {
        let {complianceTypes, userAccess, usingSecurity} = this.state
        let compSource = []
        let score = 0
        if (!complianceTypes.includes("7")){
            score++
            compSource.push({key: "complianceTypes", value: complianceTypes})
        }
        if (userAccess == 1){
            score++
            compSource.push({key:"userAccess", value:userAccess})
        }
        if (usingSecurity == 1) {
            score++
            compSource.push({key: "usingSecurity",  value:usingSecurity})
        }
        this.setState({
            complianceSources: compSource,
            complianceScore: score
        })
        console.log("Done Calculating Compliance Score")

    }

    async calculateDataLossScore(){
        let {migrationSize, userAccess, usingSecurity} = this.state
        let dlSource = []//{"migrationSize": migrationSize, "userAccess": userAccess, "usingSecurity": usingSecurity}
        let score = 0
        if (migrationSize >= 100) {
            score++
            dlSource.push({key: "migrationSize", value: migrationSize})
        }
        if (userAccess == 1) {
            score++
            dlSource.push({key: "userAccess", value: userAccess})
        }
        if (usingSecurity == 1) {
            score++
            dlSource.push({key: "usingSecurity", value: usingSecurity})
        }
        this.setState({
            dataLossSources: dlSource,
            dataLossScore: score
        })
        console.log("Done Calculating DataLoss Score")
    }

    async calculateOverBudgetScore(){
        let {migrationSize, usingSecurity, complianceTypes} = this.state
        let obSource = []// {"migrationSize": migrationSize, "usingSecurity": usingSecurity, "complianceTypes": complianceTypes}
        let score = 0
        if (migrationSize >= 100) {
            score++
            obSource.push({key: "migrationSize", value: migrationSize})
        }
        if (!complianceTypes.includes("7")) {
            score++
            obSource.push({key: "complianceTypes", value: complianceTypes})
        }
        if (usingSecurity == 1) {
            score++
            obSource.push({key: "usingSecurity", value: usingSecurity})
        }
        this.setState({
            overBudgetSources: obSource,
            overBudgetScore: score
        })
        console.log("Done Calculating OverBudget Score")
    }

    async calculateOverTimeScore(){
        let {migrationSize, usingSecurity, complianceTypes, userAccess, protocolType, networkSpeed} = this.state
        let otSource = []//{"migrationSize": migrationSize, "usingSecurity": usingSecurity, "complianceTypes": complianceTypes, "userAccess":userAccess, "protocolType":protocolType, "networkSpeed": networkSpeed}
        let score = 0
        if (migrationSize >= 100) {
            score++
            otSource.push({key: "migrationSize", value: migrationSize})
        }
        if (!complianceTypes.includes("7")) {
            score++
            otSource.push({key: "complianceTypes", value: complianceTypes})
        }
        if (usingSecurity == 1) {
            score++
            otSource.push({key: "usingSecurity", value: usingSecurity})
        }
        if (userAccess == 1) {
            score++
            otSource.push({key: "userAccess", value: userAccess})
        }
        if (protocolType == 3) {
            score++
            otSource.push({key: "protocolType", value: protocolType})
        }
        if (networkSpeed < 3) {
            score++
            otSource.push({key: "networkSpeed", value: networkSpeed})
        }
        this.setState({
            overTimeSources: otSource,
            overTimeScore: score
        })
        console.log("Done Calculating OverTime Score")
    }

    //compSource = [{key:"complianceTypes", value:complianceTypes}, {"userAccess": userAccess}, {"usingSecurity": usingSecurity}]
    //
    async generateComplianceBlurb(){
        let {complianceSources} = this.state
        let complianceObjects = ReportBlurbs.find(blurb => blurb.id == "compliance").blurbs
        let finalBlurb = "<br/><br/>Compliance<br/><br/>"
        console.log(complianceObjects)

        complianceSources.forEach(source => {
            let blurbObj = complianceObjects.find(blurb => blurb.triggerType == source.key)
            finalBlurb += blurbObj.excerpt
        })

        return finalBlurb
    }

    async generateDataLossBlurb(){
        let {dataLossSources} = this.state
        let dataLossObjects = ReportBlurbs.find(blurb => blurb.id == "dataLoss").blurbs
        let finalBlurb = "<br/><br/>Data Loss<br/><br/>"
        console.log(dataLossObjects)

        dataLossSources.forEach(source => {
            let blurbObj = dataLossObjects.find(blurb => blurb.triggerType == source.key)
            finalBlurb += blurbObj.excerpt
        })

        return finalBlurb
    }

    async generateOverBudgetBlurb(){
        let {overBudgetSources} = this.state
        let overBudgetObjects = ReportBlurbs.find(blurb => blurb.id == "overBudget").blurbs
        let finalBlurb = "<br/><br/>Over Budget<br/><br/>"
        console.log(overBudgetObjects)

        overBudgetSources.forEach(source => {
            let blurbObj = overBudgetObjects.find(blurb => blurb.triggerType == source.key)
            finalBlurb += blurbObj.excerpt
        })

        return finalBlurb
    }

    async generateOverTimeBlurb(){
        let {overTimeSources} = this.state
        let overTimeObjects = ReportBlurbs.find(blurb => blurb.id == "overTime").blurbs
        let finalBlurb = "<br/><br/>Over Time<br/><br/>"
        console.log(overTimeObjects)

        overTimeSources.forEach(source => {
            let blurbObj = overTimeObjects.find(blurb => blurb.triggerType == source.key)
            finalBlurb += blurbObj.excerpt
        })

        return finalBlurb
    }

    async generateReport(){
        let {complianceTypes, complianceScore, dataLossScore, overBudgetScore, overTimeScore} = this.state
        let html = "<h1>Your Vulnerability Report</h1>\n"
        if (complianceScore > 1 || !(complianceTypes.includes("7") || complianceTypes.includes("6"))){
            html += await this.generateComplianceBlurb()
            //add Compliance Blurb
        }
        if (dataLossScore > 1) {
            html += await this.generateDataLossBlurb()
            //add Data Loss Blurb
        }
        if (overBudgetScore > 1) {
            html += await this.generateOverBudgetBlurb()
            //add Over Budget Blurb
        }
        if (overTimeScore > 2) {
            html += await this.generateOverTimeBlurb()
            //add Over Time Blurb
        }

        this.setState({
            htmlReport: html
        })
    }

    async submitAnswers(){
        if (this.nextSlide()){ 
            //calculate scores
            await this.calculateDataLossScore()
            await this.calculateComplianceScore()
            await this.calculateOverTimeScore()
            await this.calculateOverBudgetScore()
            console.log(this.state)
            console.log("ScoresShouldBeCalculated")            
            //generate report
            this.generateReport()
        }
    }

    validateEmail(){
        let {userEmail} = this.state
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail))
        {
           return true
        }
           return false
    } 

    submitEmail(){
        //send email
        let {htmlReport, userEmail} = this.state
        if (this.validateEmail()){
            let urlObj = {method: "POST", body: JSON.stringify({html: htmlReport})}
            console.log(urlObj)
            const fullURL = "https://ffmn88dla3.execute-api.us-east-1.amazonaws.com/dev/vulnemail?email=" + userEmail            
            fetch(fullURL, urlObj)
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
        //TODO store information in DB
        //TODO maybe set up hubspot integration in lambda or something
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
                {this.state.errorState && <div className = "errorNote">There is an error in your response, please fix before proceeding.</div>}
                {this.renderSwitch(slideNumber)}
                {this.state.slideNumber < 12 && <ProgressBar striped variant="success" now={now} label={`${now}%`} />}
                <Modal.Footer>
                    {slideNumber > 0 && slideNumber < 12 && <Button variant="secondary" onClick = {this.prevSlide}>Previous</Button>}
                    {slideNumber < 10 && <Button variant = "primary" onClick = {this.nextSlide}> Next </Button>}
                    {slideNumber == 10 && <Button variant = "success" onClick = {this.submitAnswers}>Submit</Button>}
                    {slideNumber == 11 && <Button variant = "success" onClick = {this.submitEmail}> Get My Results!</Button>}
                </Modal.Footer>
            </Modal>
            <div> {this.state.htmlReport}</div>
        </React.Fragment>
        )
    }
}

export default MigrationForm