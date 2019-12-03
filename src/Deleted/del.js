/*<form onSubmit = {this.initialSubmit}>
                <div>
                <label> 1. How much data do you need to Migrate (in TB): </label>
                <input type="number" id = 'migrationSize' value={this.state.migrationSize} onChange={this.handleChange} required={true}/>
                </div>
                <div>
                <label> 2. Number of Files (optional): </label>
                <input type="number" id = 'numFiles' value={this.state.numFiles} onChange={this.handleChange} />
                </div>
                <div>
                <label> 3. Number of Directories (optional): </label>
                <input type="number" id = 'numDirectories' value={this.state.numDirectories} onChange={this.handleChange} />
                </div>
                <div>
                <label> 4. Brand of Source Storage (optional): </label>
                <select id = 'sourceType' value={this.state.sourceType} onChange={this.handleChange}>
                <option disabled="disabled" value=''>---Select an option---</option>
                            {brandListSource}
                </select>
                </div>
                <div>            
                <label> 5. Brand of Target Storage: </label>
                <select id = 'targetType' value={this.state.targetType} onChange={this.handleChange}>
                <option disabled="disabled" value=''>---Select an option---</option>
                            {brandListTarget}
                </select>                
                </div>
                <div>    
                <label> 6. What File Protocol are You Using: </label>
                <select id = 'targetType' value={this.state.targetType} onChange={this.handleChange}>
                <option disabled="disabled" value=''>---Select an option---</option>
                            {protocolList}
                </select>                
                </div>
                <div>  
                <label> 7. Do You Have any Compliance Requirements: </label>
                <select id = 'targetType' value={this.state.targetType} onChange={this.handleChange}>
                <option disabled="disabled" value=''>---Select an option---</option>
                            {complianceList}
                </select>                
                </div>
                <div>  
                <label> 8. Are You Using Active Directory, or other ACLs or security systems: </label>
                <select id = 'targetType' value={this.state.targetType} onChange={this.handleChange}>
                <option disabled="disabled" value=''>---Select an option---</option>
                            {securityList}
                </select>                
                </div>
                <div>  
                <label> 9. What is your network speed between source and target: </label>
                <select id = 'targetType' value={this.state.targetType} onChange={this.handleChange}>
                <option disabled="disabled" value=''>---Select an option---</option>
                            {networkList}
                </select>                
                </div>
                <div>  
                <label> 10. What is the network utilization: </label>
                <input type="text" id = 'networkUtilization' value={this.state.networkUtilization} onChange={this.handleChange} />
                </div>
                <div>  
                <label> 11. Will your users need access to the files during migration? </label>
                <select id = 'targetType' value={this.state.targetType} onChange={this.handleChange}>
                <option disabled="disabled" value=''>---Select an option---</option>
                            {accessList}
                </select>                
                </div>
                <button> Submit </button>
            </form>*/
/*
<select id = "sessionLength" onChange={this.handleChange} value = {this.state.sessionLength}>
            {Times.map(time => <option key = {time.time} value = {time.value}>{time.time}</option>)}
</select>


                        <select id="sessionType" onChange={this.handleChange} value={this.state.productID}>
                            <option disabled="disabled" value=''>---Select a {defaultString}---</option>
                            {products}
                        </select>    



products = this.props.products.map(product => 
                <option key = {product.ProductID} value = {product.ProductID}>{product.Subject} with {product.Student}</option>)



<Modal show={cancelling} onHide={this.handleModalClose}>
<Modal.Header closeButton>
    <Modal.Title>Cancel Session</Modal.Title>
</Modal.Header>
<Modal.Body>
    {userRole !== 'Student' ? <div>Student: {Student} </div> : null}
    {userRole !== 'Tutor' ? <div> Tutor: {Tutor} </div> : null}
    <div>
        Date: {dateFormatted.toLocaleDateString()} at {dateFormatted.toLocaleTimeString()}
    </div>
    <div>
        Location: {Location}
    </div>
</Modal.Body>
<Modal.Footer>
    <Button variant="secondary" onClick={this.handleModalClose}>
        Close
    </Button>
    <Button variant="primary" onClick={this.handleCancelSession}>
        Cancel Session
    </Button>
</Modal.Footer>
</Modal>*/


/*                <Modal.Body>
                    <div>
                        Enter your email to get your results: 
                    </div>
                    <form>
                        <input type="text" id = 'userEmail' value={this.state.userEmail} onChange={this.handleChange} />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => alert('Email Entered')}>
                        Submit
                    </Button>
                </Modal.Footer>
                */