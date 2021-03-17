import React  from 'react'
import ApplicantsTable from './Applicants-table'

const MEANStackDevelopers =(props)=>{
    const { handleStatusChange , handleStatusReject  , applicants} = props

    const meanstackdevelopers = applicants.filter((applicant)=>{
        return applicant.jobTitle==='MEAN Stack Developer'
    })
    //console.log(meanstackdevelopers)

    return (
        <div>
            <h1>MEAN Stack Developers- {meanstackdevelopers.length}</h1>
            <h5>List of candidates applied for MEAN Stack developer job</h5><br/>
            <ApplicantsTable developers={meanstackdevelopers}
                             handleStatusChange={handleStatusChange}
                             handleStatusReject={handleStatusReject}
                />
        </div>
    )
}

export default MEANStackDevelopers