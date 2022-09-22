import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';


class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0,
        }
      }
    
      click = () => {
        this.setState(x => ({ count: x.count + 1 }))
      };


  render() {
    return (
      <Container>
        <Card style={{width: '33%'}}>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Img variant="top" src={this.props.imageUrl} alt={this.props.title} title={this.props.title} onClick={this.click}/>
          <Card.Text> {this.state.count}</Card.Text>
        </Card.Body>
        </Card>
      </Container>
    )
  }
}

export default HornedBeast;