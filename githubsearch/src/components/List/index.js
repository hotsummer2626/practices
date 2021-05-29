import React, { Component } from 'react';
import './index.css';

export default class List extends Component {
    render() {
        const { users, isFirst, isLoading, err } = this.props;
        return (
            <ul className="userlist">
                {
                    isFirst ? <li>enter name and click search</li> :
                    isLoading ? <li>Loading......</li> :
                    err ? <li style={{ color:'red' }}>{err.message}</li> :
                    users.map((userObj) => {
                        return (
                            <li key={userObj.id} className="userlist__personalinfo">
                                <img src={userObj.avatar_url} alt="head__profile" />
                                <p className="userlist__personalinfo__username">{userObj.login}</p>
                            </li>
                        )
                    })
                }
            </ul>
        )
    };
}