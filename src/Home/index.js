import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <Container style={this.props.style}>
          <p>I am Home</p>
      </Container>
    );
  }
}

export default Home;