import React from 'react'
import {Link ,Route} from 'react-router-dom'

import AdminDashboard from './Admin-Dashboard.js'
import ApplicationForm from './Application-Form.js'


const App = (props) =>{

    return (
        <div className="container">
            <p><Link to="/applicationform">ApplicationForm</Link> | 
            <Link to="/admindashboard">AdminDashboard</Link></p>

            <Route path="/applicationform" component={ApplicationForm} exact={true}/>
            <Route path="/admindashboard" component={AdminDashboard} />

        </div>
    )
}

export default App