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
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Wrapper from './containers/Wrapper';
import AdminDashboard from './components/admin/AdminDashboard';

const mapStateToProps = ({ user: { isLoggedIn } }) => ({
  isLoggedIn
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
        <>
          <LoginPage />
          {/* /login/oauth is the route on the bakend that submit leads to */}
          {/* <form id="login-form" method="GET" action="/login/oauth">
                        {/* <img id="logo" src="logo2.png" alt="" /> */}
          {/* GitHub OAuth button */}
          {/* <button
                            className="btn btn-outline-primary btn-lg"
                            id="github-login"
                            type="submit"
                        >
                            GitHub Login
                        </button>
                    </form> */}
        </>
        // <div id="landing">
        //     <LoginPage />
        //     {/* /login/oauth is the route on the bakend that submit leads to */}
        //     <form id="login-form" method="GET" action="/login/oauth">
        //         <img id="logo" src="logo2.png" alt="" />
        //         {/* GitHub OAuth button */}
        //         <button
        //             className="btn btn-outline-primary btn-lg"
        //             id="github-login"
        //             type="submit"
        //         >
        //             GitHub Login
        //         </button>
        //     </form>
        // </div>
      );
    }

    // if we ARE logged in, return our Wrapper component
    return (
      <div id="mainBackground">
        {/* <Wrapper /> */}
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Wrapper} />
            <Route path="/admin" exact component={AdminDashboard} />
            {/* <Route path="/signout" exact component={Signout} /> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
