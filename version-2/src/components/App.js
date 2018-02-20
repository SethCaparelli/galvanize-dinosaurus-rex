import React, { Component } from 'react';
import Header from "./Header"
import Footer from "./Footer"
import ProfileCard from './ProfileCard';

class App extends Component {
  constructor () {
    super()
    this.state = {
      profiles: {}
    }
  }

  componentDidMount() {
    fetch("/dinosaurs.json")
    .then(response => {
      return response.json()
    })
    .then(profiles => {
      this.setState({
        profiles: profiles
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <section id="profiles-container">
          <h2>Profiles</h2>
          <ul id="profiles">
            {Object.keys(this.state.profiles).map(profile => <ProfileCard key={profile} details={this.state.profiles[profile]} />)}
          </ul>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
