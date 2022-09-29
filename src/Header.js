import React from 'react';
import Form from 'react-bootstrap/Form'

class Header extends React.Component {
  render() {
    return (
   
    
    <header>
      <div>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="dropSelect">Select the amount of horns you would like to filter by:</Form.Label>
            <Form.Select id="dropSelect" size="sm" onChange={this.props.handleForm}>
              <option>All</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='100'>100</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </div>
      <div><h1>Horned Beasts</h1></div>
      <div id="hide">&nbsp;</div>
    </header>)
  }
}
export default Header;