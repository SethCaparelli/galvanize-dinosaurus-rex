import React, { Component } from 'react'

class JobDetails extends Component {
    render() {
        return (
            <div>
                <h2>Job Details</h2>
                <h4>{this.props.details.title}</h4>
                <p>{this.props.details.description}</p>
            </div>
        )
    }
}

export default JobDetails
