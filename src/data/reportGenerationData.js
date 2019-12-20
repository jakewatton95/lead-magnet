const reportBlurbs  = [
    {id: "compliance" ,  
        blurbs: [{triggerType: "complianceTypes", title:"Compliance Audit", triggerValue: [6, 7], excerpt: "Protecting data in transit is a vital component of being %compliance_type% compliant. However, traditional methods of data migration with legacy tools may not meet the %compliance_type% compliance standards as they do not provide clear reporting and chain of custody of data throughout a migration. In order to ensure your data migration with legacy tools is compliant, you must find and configure other third party tools to address requirements. "}, 
                 {triggerType: "userAccess", title: "User Access", triggerValue: 1, excerpt: "The most important aspect of compliance is monitoring which users have access to data and when they access it. If users need steady access to hot data throughout the migration process, your migration tools must also be responsible for maintaining record of that access during the migration period in order to stay compliant. "}, 
                 {triggerType: "usingSecurity", title: "Security", triggerValue: 1, excerpt:"When you are responsible for a compliance audit, you want to have ultimate confidence that your data never fell into the wrong hands. You are confident that your security settings complied with your data at rest on your source system, but in order to be sure that you didn not suffer any \'compliance down-time,\' your migration tool must maintain security permissions in transit to your new NAS. "}]},
    {id: "dataLoss" ,  
        blurbs: [{triggerType: "migrationSize", title: "Migration Size", triggerValue: 100, excerpt: "Legacy tools are not prepared for modern data sets. As the data sets grow and become more complicated, the manual scripting and troubleshooting needed is overwhelming for any IT engineer increasing the probability for data loss.  Failed migrations from unknown errors in legacy tools. "}, 
                 {triggerType: "userAccess", title: "User Access", triggerValue: 1, excerpt: "Legacy migration tools do not account for incremental changes during the migration. Because your users are accessing files that are being migrated you are at risk of losing their changes. Legacy tools also do account for switchover, which forces your user base to switch to the new storage medium after a migration, avoiding data loss. "}, 
                 {triggerType: "usingSecurity", title: "Security", triggerValue: 1, excerpt:"Legacy tools are not integrated with Active directory and other ACLs. Therefore, to maintain your permissions for the file set, you must manually migrate your AD or ACL to your new storage platform. "}]},
    {id: "overTime" ,  
        blurbs: [{triggerType: "migrationSize", title: "Migration Size", triggerValue: 100, excerpt: "A central factor significantly increasing the time it will take to complete your data migration project will be the sheer volume of data that needs to be moved. Legacy tools are not equipped to efficiently migrate volumes of data greater than —- and often require significantly more time to finish projects of this size. Therefore your data migration project will most likely take longer to complete than anticipated. "}, 
                 {triggerType: "userAccess", title: "User Access", triggerValue: 1, excerpt: "Similar to compliance, legacy tools were not implemented to maintain permissions over a migration, rather that be from Active Directory or another form of ACL. In order to maintain these permissions, the IT engineer must take extra precaution and implement extra tools in order to maintain the permissions on the data set. "}, 
                 {triggerType: "usingSecurity", title: "Security", triggerValue: 1, excerpt:"Maintaining access permissions on your data is a major challenge. Your migration software will need to be able to map your security parameters from your source system to your new system. Legacy tools have no support for this, which means you will have to spend time looking elsewhere and setting up other software if you don’t want to manually set up your permissions on a new system. "},
                 {triggerType: "complianceTypes", title:"Compliance Audit", triggerValue: [6, 7], excerpt: "Drastic measures must be taken in order to ensure that 1) the state of the data is compliant throughout migration and 2) the state of the data is compliant when it reaches the target. Some compliance standards require data to be encrypted, and that there are certain permissions of who can view and edit data. Legacy migration tools were not developed with compliance in mind, simply moving the data from point A to point B. Other tools must be used in order to account for compliance standards, which requires extra research to find the proper tools, and extra time to implement said tools.  "}, 
                 {triggerType: "protocolType", title: "Multi-protocol", triggerValue: 3, excerpt: "Legacy tools (mainly rsync and robocopy) are only compatible with a single protocol (rsync - NFS, robocopy - CIFS/SMB). Therefore, in order to migrate datasets that rely on multiple protocols, an IT engineer will have to write scripts using multiple different engines, significantly increasing amount of time to finish the migration project. "}, 
                 {triggerType: "networkSpeed", title: "Network Speed", triggerValue: 1, excerpt:"Simply put, the slower the speed of the network, the longer a file migration will take. However, legacy tools are not capable of utilizing the maximum bandwidth during a file migration. They use a single thread and they are not optimized for different compositions of file systems. Knowing what type of data you are migrating and then planning ahead can save you a lot of time if your migration tool is optimized for the type of data it is migrating. "}]},
    {id: "overBudget" , 
        blurbs: [{triggerType: "migrationSize", title: "Migration Size", triggerValue: 100, excerpt: "Unfortunately in this case, more is not merrier. Given that it takes significantly longer for legacy systems to move large amounts of data, greater volumes of data are considerably more expensive to migrate. This is due to multiple reasons: 1) You have to keep two systems up and running throughout the entire migration, which requires power and cooling, 2) Assuming you are buying an improved NAS, the longer it takes to migrate, the longer it takes to get the efficiency benefits from the performance enhancement and, 3) the value of the new NAS goes down over time. If it sits idle for a significant amount of time, that is simply lost ROI that you could have acquired with a better migration tool. "}, 
                 {triggerType: "complianceTypes", title:"Compliance Audit", triggerValue: 1, excerpt: "Legacy tools are not enough by themselves to ensure data migrations be %compliance_type% compliant; thus, additional tools must be purchased and professional services must be contracted in order to configure them to enable your migration project to be compliant. With legacy tools, this is an unavoidable cost, as it is much cheaper than potential fines from a compliance agency. "}, 
                 {triggerType: "usingSecurity", title: "Security", triggerValue: 1, excerpt:"Maintaining security permissions on your file data is important to you. If your migration tool does not support your security settings, the job relies on your IT engineer, professional services, or a different third party tool, all of which must be factored into your budget one way or another. "}]}
]

export default reportBlurbs