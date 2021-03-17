import React from 'react'
import ApplicantsTable from './Applicants-table'

const NodejsDevelopers =(props)=>{
    const { handleStatusChange , handleStatusReject  , applicants} = props
    
    const nodejsdevelopers = applicants.filter((applicant)=>{
        return applicant.jobTitle==='Node.js Developer'
    })
    //console.log(nodejsdevelopers)

    return (
        <div>
            <h1>Node.js Developers- {nodejsdevelopers.length}</h1>
            <h5>List of candidates applied for Node.js developer job</h5><br/>
            <ApplicantsTable developers={nodejsdevelopers}
                             handleStatusChange={handleStatusChange}
                             handleStatusReject={handleStatusReject}
                />
        </div>
    )
}

export default NodejsDevelopers