
import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';
import SelectedBeast from './SelectedBeast.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      modal: {},
      display: data,
    };
  }
  
  handleClose = () => {this.setState({show: false});}
  handleShow = (key) => {const selected = data.filter(x => x._id === key);this.setState({show: true}); this.setState({modal: selected[0]});}

  handleForm = (event) => {
    event.preventDefault();
    const numSelected = Number(event.target.value);
    let filtered
    numSelected ? filtered = data.filter(h => h.horns === numSelected) : filtered = data;
    this.setState({display: filtered});
  }

    render() {
      return (
        <>
          <Header handleForm ={this.handleForm}/>
          <Main  handleShow={this.handleShow} display={this.state.display} />
          <SelectedBeast show={this.state.show} handleClose={this.handleClose} modal={this.state.modal}/>
          <Footer />
        </>
      );
    }
}

export default App;
