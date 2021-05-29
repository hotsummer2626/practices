import React, { Component } from 'react';
import axios from 'axios';
import './index.css';

export default class Search extends Component {

    search = () => {
        const { keyWordElement: { value: keyWord } } = this;
        this.props.updateAppState({ isFirst: false, isLoading: true });
        axios.get(`https://api.github.com/search/users234?q=${keyWord}`).then(
            response => {
                this.props.updateAppState({ isLoading: false, users: response.data.items });
            },
            error => {
                this.props.updateAppState({ isLoading: false, err: error});
            }
        )
    }

    render() {
        return (
            <div className="search">
                <p className="search__text">Search Github Users</p>
                <div>
                    <input ref={c => this.keyWordElement = c} className="search__input" type="text" placeholder="enter the name you search" />
                    <button onClick={this.search} className="search__btn">Search</button>
                </div>
            </div>
        )
    };
}