import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react'
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Home from './Home';
import BG from './assets/bg.jpg';
import './App.css';

class App extends Component {
  render() {
    const contentStyles = {
      marginTop: '5em',
      minHeight: '85vh'
    };
    return (
        <Router>
          <div>
            <div id="bg">
              <img src={BG} alt="" />
            </div>

            
            <Menu fluid inverted fixed='top'>
              <Link to="/">
                <Menu.Item>
                  Home
                </Menu.Item>
              </Link>
              <Link to="/about">
                <Menu.Item>
                  About
                </Menu.Item>
              </Link>
              <Link to="/portfolio">
                <Menu.Item>
                  Portfolio
                </Menu.Item>
              </Link>
              <Link to="/contact">
                <Menu.Item>
                  Contact
                </Menu.Item>
              </Link>
            </Menu>
            <Switch>
              <Route path="/about" render={() => <About style={contentStyles}/>} /> 
              <Route path="/portfolio" render={() => <Portfolio style={contentStyles}/>} />
              <Route path="/contact" render={() => <Contact style={contentStyles}/>} />  
              <Route path="/" render={() => <Home style={contentStyles}/>} /> 
            </Switch>

            <Segment inverted padded='very' color='black'>

            </Segment>
          </div>
          
        </Router>
    );
  }
}

export default App;
