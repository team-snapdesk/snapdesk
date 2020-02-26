/**
 * ************************************
 *
 * @module  App.jsx
 * @author
 * @date
 * @description
 *
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Wrapper from './containers/Wrapper';


const mapStateToProps = ({ user: { isLoggedIn } }) => ({
  isLoggedIn,
});

const mapDispatchToProps = dispatch => ({});

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // conditional rendering of login button
    const { isLoggedIn } = this.props;
    if (!isLoggedIn) {
      return (
        <div id="landing">
          <form id="login-form" method="GET" action="/login/oauth">
            <img id="logo" src="image/logo2.png" alt="" />
            <button
              className="btn btn-outline-primary btn-lg"
              id="github-login"
              type="submit"
            >
              GitHub Login
            </button>
          </form>
        </div>
      );
    }

    return (
      
      <div id="mainBackground">
        
        <Wrapper />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
