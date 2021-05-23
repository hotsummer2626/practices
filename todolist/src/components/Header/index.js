import React, { Component } from 'react';
import './index.css';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <input type="text" placeholder="Please input name and click enter" />
            </div>
        )
    }
}