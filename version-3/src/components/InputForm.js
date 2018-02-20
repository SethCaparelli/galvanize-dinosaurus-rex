import React, { Component } from 'react'
import Preview from "./Preview"

class InputForm extends Component {
    constructor() {
        super()
        this.togglePreview = this.togglePreview.bind(this)
        this.state = {
            isHidden: true,
            hidePreview: true
        }
    }

    createApp(event) {
        event.preventDefault()
        const application = {
            description: this.description.value
        }
        this.props.addDesc(application)
        this.appForm.reset()
        this.showSuccessMessage(event)
        this.setState({
            words: ""
        })
    }

    showSuccessMessage() {
       this.setState({
           isHidden: false
       })
    }

    togglePreview(event) {
        event.preventDefault()
        this.setState({
            hidePreview: !this.state.hidePreview
        })
    }

    mimic(event) {
        const words = this.description.value
        this.setState({words})
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => {this.createApp(e)}} ref={(input) => {this.appForm = input}} id="application-input">
                    <label>Apply Here:</label>
                    <textarea onInput={(e) => {this.mimic(e)}} ref={(input) => {this.description = input}} id="application-text" cols="100" rows="8"></textarea>
                    <input type="submit" id="submit" value="Submit" />
                    {this.state.isHidden ? "" : <p id="message">Your application was submitted!</p>}
                    <br/>
                    <br/>
                </form>
                    <button onClick={(e) => {this.togglePreview(e)}} id="preview-toggle">Show Preview</button>
                    {this.state.hidePreview ? "" : <Preview details={this.state.words} />}
            </div>
        )
    }
}

export default InputForm
