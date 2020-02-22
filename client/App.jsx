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

// IMPORT CONTAINERS AND COMPONENTS HERE

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Wrapper />
      </div>
    )
  }
}

export default App;