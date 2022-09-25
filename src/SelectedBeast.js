import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';


class SelectedBeast extends React.Component{
  render(){
    return(
      <Container>
          <Modal show={this.props.show} onHide={this.props.handleClose}>
            <Modal.Header className="bg-dark text-light" closeButton closeVariant="white">
              <Modal.Title>{this.props.modal.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-dark text-light">
              <img src={this.props.modal.image_url} alt={this.props.modal.title} title={this.props.modal.title}className="w-75 m-auto"/>
              <p>{this.props.modal.description}</p>
            </Modal.Body>
            <Modal.Footer className="bg-dark text-light"/>
          </Modal>
        </Container>
    );
  }
}
export default SelectedBeast;