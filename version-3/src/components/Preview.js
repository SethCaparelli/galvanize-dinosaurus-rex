import React, { Component } from 'react'

class Preview extends Component {
    render() {
        return (
            <section id="application-preview" className="hidden">
                {this.props.details}
            </section>
        )
    }
}

export default Preview
