import React, { Component } from 'react'
import Header from "./Header"
import Job from "./Job"
import AddJobForm from "./AddJobForm"
import Footer from "./Footer"


class App extends Component {
  constructor() {
    super()

    this.addJob = this.addJob.bind(this)
    this.state = {
      jobs: []
    }
  }

  componentDidMount() {
    fetch("/listings.json")
      .then(response => {
       return response.json()})
      .then(jobListings =>
      this.setState({
        jobs: jobListings
      }))
      .catch(error => {
        console.log(error)
      })
  }

  addJob(job) {
    const jobs = [job,...this.state.jobs]
    this.setState({ jobs: jobs })
  }

  render() {
    return (
      <div>
        <Header />
        <main>
          <section>
            <ul id="job-listings">
              {this.state.jobs.map(job => <Job key={job.id} details={job} addJob={this.addJob} />)}
            </ul>
          </section>
          <aside id="side-bar">
            <AddJobForm addJob={this.addJob} />
          </aside>
        <Footer />
        </main>
      </div>
    )
  }
}

export default App;
