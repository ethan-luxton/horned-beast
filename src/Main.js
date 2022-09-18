import React from 'react';

class Main extends React.Component {
  render() {
    return (
      <>
        <img src = {this.props.imageUrl} alt = {this.props.title} title = {this.props.title}></img>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
      </>
    )
  }
}

export default Main;