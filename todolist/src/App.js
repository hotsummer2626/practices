import React, { Component } from 'react';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import './App.css'

export default class App extends Component {

  state = {
    todos: [
      { id: '001', name: 'eat', done: true },
      { id: '002', name: 'sleep', done: true },
      { id: '003', name: 'coding', done: false }
    ]
  };

  render() {
    const { todos } = this.state;

    return (
      <div className="container">
        <Header />
        <List todos={todos} />
        <Footer />
      </div>
    )
  }
}