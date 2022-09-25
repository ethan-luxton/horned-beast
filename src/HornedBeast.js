import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component {
    constructor(props) {super(props); this.state = {count: 0}}
    click = () => {this.setState(x => ({ count: x.count + 1 }))};
  render() {
    return (
      <Container>
        <Card>
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Img src={this.props.imageUrl} alt={this.state.keyword} title={this.state.title} onClick={() => {this.props.handleShow(this.props.id)}} />
          </Card.Body>
          <Card.Text>{this.props.description}</Card.Text>
            <Card.Text>Number of Horns: {this.props.horns}</Card.Text>
            <Card.Text>Total Votes: {this.state.count}</Card.Text>
          <div className="d-grid gap-2"><Button onClick={this.click}>Vote Favorite</Button></div>
        </Card>
      </Container>
    )
  }
}
export default HornedBeast;