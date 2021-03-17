import React from 'react'
import ApplicantsTable from './Applicants-table'

const FullStackDevelopers =(props)=>{
    const { handleStatusChange , handleStatusReject  , applicants} = props

    const fullstackdevelopers = applicants.filter((applicant)=>{
        return applicant.jobTitle==='FULL Stack Developer'
    })
    //console.log(fullstackdevelopers)

    return (
        <div>
            <h1>Full Stack Developers- {fullstackdevelopers.length}</h1>
            <h5>List of candidates applied for Full Stack developer job</h5><br/>
            <ApplicantsTable developers={fullstackdevelopers}
                             handleStatusChange={handleStatusChange}
                             handleStatusReject={handleStatusReject}
                />
        </div>
    )
}

export default FullStackDevelopers