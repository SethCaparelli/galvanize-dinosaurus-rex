import React, { Component } from 'react';
import ProfileHeader from "./ProfileHeader"
import SkillList from "./SkillList";

class ProfileCard extends Component {
    constructor() {
        super()
        this.showSkills = this.showSkills.bind(this)
        this.state = {
            hidden: true
        }
    }

    showSkills() {
        this.setState({
            hidden: !this.state.hidden
        })
    }

    render() {
        return (
            <li onClick={this.showSkills} className="profile-card">
                <div>
                    <ProfileHeader click={this.clicked} details={this.props.details} />
                </div>
                {this.state.hidden ? "" : <SkillList  details={this.props.details} />}
            </li>
        );
    }
}

export default ProfileCard
