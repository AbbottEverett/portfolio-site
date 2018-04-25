import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

class Contact extends Component {
  render() {
    return (
    <Container style={this.props.style}>
        <p>I am Contact</p>
    </Container>
    );
  }
}

export default Contact;