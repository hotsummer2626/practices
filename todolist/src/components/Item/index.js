import React, { Component } from 'react';
import './index.css';

export default class Item extends Component {

    state = { mouse: false };

    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag });
        }
    }

    handleCheck = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked);
        }
    }

    handleDelete = (id) => {
        return () => {
            if (window.confirm('ready to delete?')) {
                this.props.deleteTodo(id);
            }
        }
    }

    render() {
        const { id, name, done } = this.props;
        const { mouse } = this.state;
        return (
            <li style={{ backgroundColor: mouse ? '#ddd' : '#bfa' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} className="list__item">
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />&nbsp;
                    <span>{name}</span>
                </label>
                <button onClick={this.handleDelete(id)} className="list__item__btn" style={{ display: mouse ? 'block' : 'none' }}>delete</button>
            </li>
        )
    }
}