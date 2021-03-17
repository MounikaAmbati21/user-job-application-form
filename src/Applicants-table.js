import React , {useState} from 'react'
import Modal from './Modal'

const ApplicantsTable =(props)=>{
    const {developers, handleStatusChange, handleStatusReject} = props
    const [showModal , setShowModal] = useState(false)
    const [selectedApplicant , setSelectedApplicant] = useState({})

    const handleClick =(ele)=>{
        setShowModal(true)
        setSelectedApplicant(ele)
    }
    const hideModal = ()=>{
        setShowModal(false)
    }

    return (
        <div className="row">
        <table className="table table-light table-striped">
        <thead className="table-secondary">
            <tr>
            <th>Name</th>
            <th>Technical Skills</th>
            <th>Experience</th>
            <th>Applied Date</th>
            <th>View Details</th>
            <th>Update Application Status</th>
            </tr>
        </thead>
        <tbody>
        {
            developers.map(ele=>{
                return <tr key={ele._id}>
                    <td>{ele.name}</td>
                    <td>{ele.skills}</td>
                    <td>{ele.experience}</td>
                    <td>{ele.createdAt.slice(0,10)}</td>
                    <td><button onClick={()=>handleClick(ele)} className="btn btn-info bt-sm">View Details</button></td>
                    <td>
                        {
                            ele.status==='applied' ? (
                                <div><button onClick={()=>handleStatusChange(ele)} className="btn btn-success">Shortlist</button><button onClick={()=>handleStatusReject(ele)} className="btn btn-danger">Reject</button></div>
                                ):(
                                ele.status==='shortlisted' ? 
                                    <button className="btn btn-success" >Shortlisted</button> 
                                    : <button className="btn btn-danger">Rejected</button>
                                )
                        }
                    </td>
                </tr>
            })
        }
        {
            showModal && <Modal hideModal={hideModal} selectedApplicant={selectedApplicant}/>
        }
        </tbody>
    </table>
    </div>
    )
}

export default ApplicantsTable