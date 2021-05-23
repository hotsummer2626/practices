import React, { Component } from 'react';
import './index.css';

export default class Item extends Component {
    render() {
        const {todo}=this.props;
        return (
            <li className="list__item">
                <label>
                    <input type="checkbox" />&nbsp;
                    <span>{todo.name}</span>
                </label>
                <button className="list__item__btn" style={{ display: 'none' }}>delete</button>
            </li>
        )
    }
}