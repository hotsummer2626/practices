import React, { Component } from 'react';
import Item from '../Item';
import './index.css';

export default class List extends Component {
    render() {
        const { todos } = this.props;
        return (
            <ul className="list">
                {
                    todos.map((todo) => {
                        return <Item todo={todo} />
                    })
                }
            </ul>
        )
    }
}