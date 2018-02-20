import React, { Component } from 'react'
import dinoImage from "../assets/g-dino.png"

class Header extends Component {
    render() {
        return (
            <img id="logo" src={dinoImage} alt="logo"/>
        )
    }
}

export default Header
