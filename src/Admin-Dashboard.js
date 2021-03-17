import React , {useState , useEffect}from 'react'
import {Link ,Route} from 'react-router-dom'
import axios from 'axios'

import FrontEndDevelopers from './FrontEndDevelopers'
import NodejsDevelopers from './NodejsDevelopers'
import MEANStackDevelopers from './MEANStackDevelopers'
import FullStackDevelopers from './FullStackDevelopers'

const AdminDashboard = (props) =>{
    const [applicants , setApplicants] = useState([])
    const [isStatusChanged , setIsStatusChanged]= useState(false)

    useEffect(()=>{
        axios.get('https://dct-application-form.herokuapp.com/users/application-forms')
            .then((response)=>{
                //console.log(response.data)
                setApplicants(response.data)
            })
            .catch((err)=>{
                alert(err.message)
            })
    },[isStatusChanged])

    
    
    const handleStatusChange=(applicant)=>{
        axios.put(`https://dct-application-form.herokuapp.com/users/application-form/update/${applicant._id}`,{status:'shortlisted'})
            .then((response)=>{
                //console.log(response.data)
                setIsStatusChanged(!isStatusChanged)
            })
            .catch((err)=>{
                alert(err.message)
            })
    }
    const handleStatusReject=(applicant)=>{
        axios.put(`https://dct-application-form.herokuapp.com/users/application-form/update/${applicant._id}`,{status:'rejected'})
            .then((response)=>{
               // console.log(response.data)
               setIsStatusChanged(!isStatusChanged)
            })
            .catch((err)=>{
                alert(err.message)
            })
    }

    return (
        <div className="row mb-4 mt-2">
            <h2>Admin Dashboard</h2>
            <div className="d-grid gap-2 d-md-block">
            <p><Link to="/admindashboard/frontenddevelopers" className="btn btn-secondary" >Front End Developer</Link>{"    "} 
               <Link to="/admindashboard/nodejsdevelopers" className="btn btn-secondary ">Node js Developer</Link> {"   "}    
               <Link to="/admindashboard/meanstackdevelopers" className="btn btn-secondary ">MEAN Stack Developer</Link> {"   "}     
               <Link to="/admindashboard/fullstackdevelopers" className="btn btn-secondary ">Full Stack Developer</Link>
            </p>
            </div>
            <Route path="/admindashboard/frontenddevelopers" 
                   render={(props)=> < FrontEndDevelopers {...props} 
                                                            isStatusChanged={isStatusChanged} 
                                                            handleStatusChange={handleStatusChange} 
                                                            handleStatusReject={handleStatusReject} 
                                                            applicants={applicants}
                                                            /> } 
                />
            <Route path="/admindashboard/nodejsdevelopers" 
                    render={(props)=> < NodejsDevelopers {...props} 
                                                            isStatusChanged={isStatusChanged} 
                                                            handleStatusChange={handleStatusChange} 
                                                            handleStatusReject={handleStatusReject} 
                                                            applicants={applicants}
                                                            /> } 
                />
            <Route path="/admindashboard/meanstackdevelopers" 
                    render={(props)=> < MEANStackDevelopers {...props} 
                                                            isStatusChanged={isStatusChanged} 
                                                            handleStatusChange={handleStatusChange} 
                                                            handleStatusReject={handleStatusReject} 
                                                            applicants={applicants}
                                                            /> } 
                />
            <Route path="/admindashboard/fullstackdevelopers" 
                    render={(props)=> < FullStackDevelopers {...props} 
                                                            isStatusChanged={isStatusChanged} 
                                                            handleStatusChange={handleStatusChange} 
                                                            handleStatusReject={handleStatusReject} 
                                                            applicants={applicants}
                                                            /> } 
                />
        </div>
    )
}

export default AdminDashboard