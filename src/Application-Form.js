import React, {useState} from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'


const ApplicationForm = (props)=>{
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [contact , setContact] = useState('')
    const [role , setRole] = useState('')
    const [experience , setExperience] = useState('')
    const [skills , setSkills] = useState('')

    const handleChange = (e)=>{
        if(e.target.name==="name"){
            setName(e.target.value)
        }else if(e.target.name==="email"){
            setEmail(e.target.value)
        }else if(e.target.name==="contact"){
            setContact(e.target.value)
        }else if(e.target.name==="role"){
            setRole(e.target.value)
        }else if(e.target.name==="experience"){
            setExperience(e.target.value)
        }else if(e.target.name==="skills"){
            setSkills(e.target.value)
        }
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        const formData = {
            id:uuidv4(),
            name:name,
            email: email,
            phone:contact,
            jobTitle:role,
            experience:experience,
            skills:skills
        }
        console.log(formData)
        axios.post('https://dct-application-form.herokuapp.com/users/application-form',formData)
            .then((response)=>{
                setName('')
                setEmail('')
                setContact('')
                setRole('')
                setExperience('')
                setSkills('')
                //console.log(response)
                alert('Application Form Submitted Successfully')
            })
            .catch((err)=>{
                alert(err.message)
            })
    }

    return (
        <div className="container">
            <div className="container bg-light">
            <h2>Apply for job</h2>
            <form onSubmit={handleSubmit} >
                <label className="form-label">Full Name</label>
                <input type="text" value={name} name="name" onChange={handleChange} placeholder="eg: john" required className="form-control"/><hr/>
                <label className="form-label">Email address</label>
                <input type="email" value={email} name="email" onChange={handleChange} placeholder="eg: john@example.com" required className="form-control"/><hr/>
                <label className="form-label">Contact Number</label>
                <input type="number" value={contact} name="contact" onChange={handleChange} placeholder="eg: 1234567890"required className="form-control"/><hr/>
                <label className="form-label">Applying for job</label>
                <select value={role} name="role" onChange={handleChange}required className="form-select">
                    <option value="" >---Select---</option>
                    <option value="Front-End Developer">Front End Developer</option>
                    <option value="Node.js Developer">Node js Developer</option>
                    <option value="MEAN Stack Developer">Mean Stack Developer</option>
                    <option value="FULL Stack Developer">Full Stack Developer</option>
                </select><hr/>
                <label className="form-label">Experience</label>
                <input type="text" value={experience} name="experience" onChange={handleChange} placeholder="--years, --months" className="form-control"/><hr/>
                <label className="form-label">Technical Skills</label>
                <textarea value={skills} name="skills" onChange={handleChange} placeholder="eg: JS ,React etc.." required className="form-control" rows="3"></textarea><hr/>
                <input type="submit" value="Send Application" className="btn btn-primary"/>
            </form>
            </div>
        </div>
    )
}

export default ApplicationForm