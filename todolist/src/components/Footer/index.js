import React, { Component } from 'react';
import './index.css';

export default class Footer extends Component {

    handleCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked);
    }

    handleClearAllDone=()=>{
        this.props.clearAllDone();
    }

    render() {
        const { todos } = this.props;
        const doneCount = todos.reduce((prev, todoObj) => prev + (todoObj.done ? 1 : 0), 0);
        const total = todos.length;
        return (
            <div className="footer">
                <label>
                    <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total && total !== 0 ? true : false} />&nbsp;
                    <span>done: {doneCount} / total: {total}</span>
                </label>
                <button onClick={this.handleClearAllDone} className="footer__btn">delete all done</button>
            </div>
        )
    }
}