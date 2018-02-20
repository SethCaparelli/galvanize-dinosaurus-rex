import React, { Component } from 'react';

class SkillList extends Component {
    render() {
        return (
            <div>
                <h4>Skills</h4>
                <ul className="skills-list">
                    {this.props.details.skills.map(skill => <li key={skill}>{skill}</li>)}
                </ul>
            </div>
        );
    }
}

export default SkillList
