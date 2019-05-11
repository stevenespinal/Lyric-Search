import React, { Component } from 'react';
// import NavBar from './components/layout/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './components/layout/Index';
import {Provider} from './context';
import Lyrics from './components/tracks/Lyrics';
class App extends Component {
  render() {
    return (
      <Provider>
      <Router>
        <React.Fragment>
          {/* <NavBar /> */}
          <div className="container mt-4">
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/lyrics/track/:id" component={Lyrics} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
      </Provider>
    );
  }
}

export default App;