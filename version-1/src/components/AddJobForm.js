import React, { Component } from 'react'

class AddJobForm extends Component {
    createJob (event) {
        event.preventDefault()
        const job = {
            id: Date.now(),
            title: this.title.value,
            description: this.description.value,
            pay: this.pay.value,
            interested: []
        }
        this.props.addJob(job)
        this.jobForm.reset()
    }

    render() {
        return (
            <div>
                <h3>Add Job</h3>
                <form ref={(input) => {this.jobForm = input}} onSubmit={(e) => {this.createJob(e)}} type="submit" className="job-form">
                    <label htmlFor="title">Title</label>
                    <input ref={(input) => {this.title = input}} type="text" name="title"/>
                    <label htmlFor="pay">Compensation</label>
                    <input ref={(input) => {this.pay = input}} type="text" name="pay"/>
                    <label htmlFor="description">Description</label>
                    <textarea ref={(input) => {this.description = input}} name="description" rows="8" cols="40"></textarea>
                    <input type="submit" name="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default AddJobForm
