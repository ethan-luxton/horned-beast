import React from 'react';
import data from './data.json'
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  render() {
    return (
      data.map(item => (<HornedBeast title={item.title} imageUrl={item.image_url} description={item.description}/>))
      )
    }
  
}

export default Main;