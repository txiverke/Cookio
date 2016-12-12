/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   15-Nov-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 12-Dec-2016
*/

import React from 'react';
import API from '../../Utils/Api';
import { Router } from 'react-router';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const username = this.refs.username.value;
        const password = this.refs.password.value;
        const user = {};

        if (username && password) {
            user.username = username;
            user.password = password;

            API.post('signin', user).then((res) => {
                console.log('res', res)
                if (res.success) {
                    this.props.history.push(`/guest/${res.user.username}`);
                    console.log('SUCCESS!!!!')
                } else {
                    console.log(res.message)
                }
            });
        }


    }

    render(){
        return (
            <div className="content">
                <h1 className="main-title">Sign In</h1>
                <hr className="hr-1" />
                <form className="form" onSubmit={this.handleSubmit}>
                    <fieldset className="field">
                        <div className="field-label">
                            <label>Username:</label>
                        </div>
                        <div className="field-input">
                            <input
                                type="text"
                                ref="username"
                            />
                        </div>
                    </fieldset>
                    <fieldset className="field mb-20">
                        <div className="field-label">
                            <label>Password:</label>
                        </div>
                        <div className="field-input">
                            <input
                                type="password"
                                ref="password"
                            />
                        </div>
                    </fieldset>
                    <div className="hr-1"></div>
                    <button
                        className="btn-invert field-button"
                        type="submit"
                        value="Submit">Sign In</button>
                </form>
            </div>
        );
    }
}

export default SignIn;
