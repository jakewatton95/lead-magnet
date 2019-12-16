const reportBlurbs  = [
    {id: "compliance" ,  
        blurbs: [{triggerType: "complianceTypes", triggerValue: ["6", "7"], excerpt: "Protecting data in transit is a vital component of being %compliance_type% compliant. However, traditional methods of data migration with legacy tools do not meet the %compliance_type% compliance standards as they do not —-. In order to ensure your data migration with legacy tools is compliant, you must find and configure other third party tools to address requirements. "}, 
                 {triggerType: "userAccess", triggerValue: "1", excerpt: "The most important aspect of compliance is monitoring which users have access to data and when they access it. If users need steady access to hot data throughout the migration process, your migration tools must also be responsible for maintaining record of that access during the migration period in order to stay compliant. "}, 
                 {triggerType: "usingSecurity", triggerValue:"1", excerpt:"When you are responsible for a compliance audit, you want to have ultimate confidence that your data never fell into the wrong hands. You are confident that your security settings complied with your data at rest on your source system, but in order to be sure that you didn’t suffer any ‘compliance down-time,’ your migration tool must maintain security permissions in transit to your new NAS. "}]},
    {id: "dataLoss" ,  
        blurbs: []},
    {id: "overTime" ,  
        blurbs: []},
    {id: "overBudget" , 
        blurbs: []}



]

export default reportBlurbs