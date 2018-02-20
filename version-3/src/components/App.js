import React, { Component } from "react"
import Footer from "./Footer"
import Header from "./Header"
import InputForm from "./InputForm"
import JobDetails from "./JobDetails"

class App extends Component {
  constructor() {
    super()
    this.addDesc = this.addDesc.bind(this)
    this.state = {
      jobs: [],
    }
  }

  componentDidMount() {
    fetch("/listing.json")
    .then(response => {
      return response.json()
    })
    .then(jobs => {
      this.setState({
        jobs: jobs
      })
    })
  }

  addDesc(application) {
    const applications = {application,...this.state.applications}
    this.setState({applications})
  }

  render() {
    return (
      <div>
        <Header />
        <main>
          <section id="job-details">
            <JobDetails details={this.state.jobs} />
          </section>
          <InputForm addDesc={this.addDesc} />
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;
