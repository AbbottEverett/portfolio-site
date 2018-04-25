import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

class About extends Component {
  render() {
    return (
      <Container style={this.props.style}>
          <p>I am About</p>
      </Container>
    );
  }
}

export default About;