import React, { Component } from 'react';
import './index.css';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <label>
                    <input type="checkbox" />&nbsp;
                    <span>done: 2 / total: 4</span>
                </label>
                <button className="footer__btn">delete all done</button>
            </div>
        )
    }
}