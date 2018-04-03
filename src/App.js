import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// import FirstRoute from './components/FirstRoute';
// import SecondRoute from './components/SecondRoute';
// import ThirdRoute from './components/ThirdRoute';
// import Nav from './components/Nav';
import './App.css';

// cars stuff
import Colors from './components/Colors';
import Results from './components/Results';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Nav /> */}
          <Switch>
            <Route exact path='/' component={ Colors } />
            <Route path='/results/:color' component={ Results } />
            {/* <Route exact path='/' render= {() => <FirstRoute />} />
            <Route path='/second' component={SecondRoute} />
            <Route path='/third' component={ThirdRoute} /> */}
          </Switch>
        </div>  
      </Router>
    );
  }
}

export default App;
