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
        <form method="GET" action="/login/oauth">
          <button type="submit">GitHub Login</button>
        </form>
      );
    }

    return (
      <div>
        <Wrapper />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
