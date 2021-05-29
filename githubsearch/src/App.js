import React, { Component } from 'react';
import Search from './components/Search';
import List from './components/List';
import './App.css';

export default class App extends Component {

  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err: ''
  };

  updateAppState = (newState) => {
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <div className="container">
          <Search updateAppState={this.updateAppState} />
          <List {...this.state} />
        </div>
      </div>
    )
  }
}
