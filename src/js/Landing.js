import React, { Component } from 'react';
import '../css/Landing.css';
// import igLogo from '../assets/logo-instagram.svg';
// import emailIcon from '../assets/logo-email.svg';
import { Redirect } from 'react-router-dom';


class Landing extends Component {
  render() {
    return <Redirect to='/work' />
  }
}

export default Landing;