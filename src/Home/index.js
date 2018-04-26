import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <Container style={this.props.style}>
        <Header 
          as='h3'
          textAlign='center'
          color='grey'
          style={{ marginTop: '10em' }}>
          Seattle-based, Full-Stack Software Engineer​ with a passion for tackling difficult technical challenges that come with integration and application state management.
        </Header>
      </Container>
    );
  }
}

export default Home;