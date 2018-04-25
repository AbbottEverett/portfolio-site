import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

class Portfolio extends Component {
  render() {
    return (
      <Container style={this.props.style}>
          <p>I am Portfolio</p>
      </Container>
    );
  }
}

export default Portfolio;