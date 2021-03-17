import React  from 'react'
import ApplicantsTable from './Applicants-table'

const FrontEndDevelopers =(props)=>{
    const {handleStatusChange , handleStatusReject  , applicants} = props
    

    const frontenddevelopers = applicants.filter((applicant)=>{
        return applicant.jobTitle==='Front-End Developer'
    })
    //console.log(frontenddevelopers)

    
    return (
        <div>
            <h1>Front-End Developers- {frontenddevelopers.length}</h1>
            <h5>List of candidates applied for Front-end developer job</h5><br/>
            <ApplicantsTable developers={frontenddevelopers}
                             handleStatusChange={handleStatusChange}
                             handleStatusReject={handleStatusReject}
                />
        </div>
    )
}

export default FrontEndDevelopers