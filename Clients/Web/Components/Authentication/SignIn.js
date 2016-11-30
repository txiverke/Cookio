/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   15-Nov-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 29-Nov-2016
*/

import React from 'react';


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        console.log(event);
        this.setState({
            value: event.target.value
        });
    }
    handleSubmit(event) {
        console.log(event)
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
                                value={this.state.value}
                                onChange={this.handleChange}/>
                        </div>
                    </fieldset>
                <fieldset className="field mb-20">
                    <div className="field-label">
                        <label>Password:</label>
                    </div>
                    <div className="field-input">
                        <input type="password" name="password" required />
                    </div>
                </fieldset>
                <div className="hr-1"></div>
                <button
                    className="btn-invert field-button"
                    type="submit"
                    value="submit">Sign In</button>
                </form>
            </div>
        );
    }
}

export default SignIn;
