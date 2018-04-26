import React, { Component } from 'react';
import { Container, Card, Image, Icon } from 'semantic-ui-react';
import Everett from '../assets/Everett.jpeg';

class About extends Component {
  render() {
    return (
      <Container style={this.props.style}>
          <Card>
            <Image src={Everett} />
            <Card.Content>
              <Card.Header>
                Hi! My name is Everett!
              </Card.Header>
              <Card.Meta>
                <span className='date'>
                  Joined in 2015
                </span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                22 Friends
              </a>
            </Card.Content>
          </Card>
      </Container>
    );
  }
}

export default About;