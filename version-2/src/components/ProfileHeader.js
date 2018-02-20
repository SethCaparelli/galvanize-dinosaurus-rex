import React, { Component } from 'react';

class ProfileHeader extends Component {
    render() {
        return (
            <header onClick={this.props.clicked} className="profile-header">
                <img className="profile-image" src={this.props.details.image} alt="profile-img"/>
                <h2>{this.props.details.name}</h2>
            </header>
        );
    }
}

export default ProfileHeader
