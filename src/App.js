import React, { Component } from 'react';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import { Menu, Segment, Icon } from 'semantic-ui-react'
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Home from './Home';
import BG from './assets/bg.jpg';
import './App.css';

class App extends Component {
  state = {
    activeItem: '/'
  }

  componentDidMount() {
    this.setState({ activeItem: this.props.location.pathname });
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const contentStyles = {
      minHeight: '100vh'
    };

    const { activeItem } = this.state;

    return (
        <div>
          <div id="bg">
            <img src={BG} alt="" />
          </div>
          <Menu 
            stackable 
            fluid 
            inverted
            size='mini' 
            fixed='top'>
            <Link to="/">
              <Menu.Item 
                name='home'
                active={ activeItem === '/' } 
                onClick={this.handleItemClick}>
                Home
              </Menu.Item>
            </Link>
            <Link to="/about">
              <Menu.Item
                name='about'
                active={activeItem === '/about'} 
                onClick={this.handleItemClick}>
                About
              </Menu.Item>
            </Link>
            <Link to="/portfolio">
              <Menu.Item
                name='portfolio'
                active={activeItem === '/portfolio'} 
                onClick={this.handleItemClick}>
                Portfolio
              </Menu.Item>
            </Link>
            <Link to="/contact">
              <Menu.Item
                name='contact'
                active={activeItem === '/contact'} 
                onClick={this.handleItemClick}>
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

          <Segment 
            inverted 
            padded='very' 
            color='black'
            textAlign='center'>
            <a href='https://github.com/AbbottEverett'>
              <Icon 
                name='github'
                size='huge'
                color='grey'
                inverted />
            </a>
            <a href='https://www.linkedin.com/in/abbotteverett/'>
              <Icon 
                name='linkedin'
                color='grey'
                inverted
                size='huge'/>
            </a>
          </Segment>
        </div>
    );
  }
}

export default withRouter(App);
