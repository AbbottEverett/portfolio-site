import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Home from './Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/about" render={() => <About />} /> 
            <Route path="/contact" render={() => <Contact />} /> 
            <Route path="/portfolio" render={() => <Portfolio />} /> 
            <Route path="/" render={() => <Home />} /> 
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
