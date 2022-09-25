import React from 'react';
import HornedBeast from './HornedBeast.js';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.json'

class Main extends React.Component {
  render() {
    return (
      <body><Container>
          <Row xl={4} className="g-4">
            {data.map(item => (<Col><HornedBeast id={item._id} key={item._id} title={item.title} imageUrl={item.image_url} description={item.description} keyword={item.keyword} horns={item.horns} handleShow={this.props.handleShow}/></Col>))}
          </Row>
        </Container></body>
      )
    }
  
}

export default Main;