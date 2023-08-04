import React from 'react'
import { Link } from 'react-router-dom'

const DashboardHeader = () => {
    return (
        <div className="dashboard-header">
            <div className="logo">
                Nomad
            </div>
            <div className="btn-postjob">
                <Link to='/dashboard/postjob'>Post a Job</Link>
            </div>
        </div>
    )
}

export default DashboardHeader
