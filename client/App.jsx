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
import Wrapper from './containers/Wrapper'
import { connect } from 'react-redux';


const mapStateToProps = ({ user: { isLoggedIn } }) => ({
  isLoggedIn
});

const mapDispatchToProps = (dispatch) => ({

});

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // conditional rendering of login button
    if (!this.props.isLoggedIn) {
      return (
        <form method="GET" action="/login/oauth">
          <button type="submit">GitHub Login</button>
        </form>
      )
    }

    return(
      <div>
        <Wrapper />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);