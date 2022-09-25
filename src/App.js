
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
  handleShow = () => {this.setState({show: true});}
  handleShow = (key) => {const selected = data.filter(x => x._id === key); this.setState({show: true}); this.setState({modal: selected[0]});}
    render() {
      return (
        <>
          <Header />
          <Main data={data} handleShow={this.handleShow} display={this.state.display}/>
          <SelectedBeast show={this.state.show} handleClose={this.handleClose} modal={this.state.modal}/>
          <Footer />
        </>
      );
    }
}

export default App;
