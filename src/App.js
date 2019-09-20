import React from 'react';
// import logo from './logo.svg';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './App.css';

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null
  };

  handleClick = buttonName => {
    this.setState(
      console.log(buttonName),
    );
  }

  render() {
    return (
      <div className='component-app'>
        <Display value={ this.state.total || this.state.next || 0} />
        <ButtonPanel  clickHandler={this.handleClick}/>
      </div>
    );
  }
}

