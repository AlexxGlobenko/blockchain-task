import React, { PureComponent } from 'react';

import { Spinner } from 'ui';
import Router from 'routes';

class App extends PureComponent {

  render() {
    return (
      <>
        <Spinner />

        <Router />
      </>
    );
  }
}

export default App;
