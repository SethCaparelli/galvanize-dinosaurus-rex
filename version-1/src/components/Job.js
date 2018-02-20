import React, { Component } from 'react'

class Job extends Component {
    render() {
        return (
          <li>
              <h4>{this.props.details.title}</h4>
              <small>{this.props.details.pay}</small>
              <p>{this.props.details.description}</p>
              <small>{this.props.details.interested.length} dinos are interested in this job</small>
          </li>
        );
    }
}

export default Job
