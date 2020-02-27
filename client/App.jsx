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

 //test comment

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Wrapper from './containers/Wrapper';

import Profile from './components/Profile.jsx';


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
            <img id="logo" src="logo2.png" alt="" />
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
         <Switch>
          <Route
            exact path="/profile"
            component={Profile}
          />
        </Switch>
        <Wrapper />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
