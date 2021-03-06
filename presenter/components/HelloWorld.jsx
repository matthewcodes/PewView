import React from 'react';
const {ipcRenderer} = require('electron');

export default class HelloWorld extends React.Component {

  constructor(props) {
    super(props);
  }

  handleClick() {
    ipcRenderer.send('next-slide', 'go to next slide');
  }

  render() {
    return (
      <button onClick={this.handleClick}>
         Next Slide
      </button>
    )
  }
}
