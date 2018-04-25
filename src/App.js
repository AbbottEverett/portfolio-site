import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react'
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Home from './Home';
import './App.css';

class App extends Component {
  render() {
    const views = [
      { key: 'Home', name: 'Home' },
      { key: 'About', name: 'About' },
      { key: 'Contact', name: 'Contact' },
      { key: 'Portfolio', name: 'Portfolio' },
    ];

    const contentStyles = {
      marginTop: '5em'
    };
    return (
        <Router>
          <div>
            <Menu fluid fixed='top' items={views} />
            <Switch>
              <Route path="/about" render={() => <About style={contentStyles}/>} /> 
              <Route path="/contact" render={() => <Contact style={contentStyles}/>} /> 
              <Route path="/portfolio" render={() => <Portfolio style={contentStyles}/>} /> 
              <Route path="/" render={() => <Home style={contentStyles}/>} /> 
            </Switch>

            <Segment inverted color='black'>
            
            </Segment>
          </div>
          
        </Router>
    );
  }
}

export default App;
