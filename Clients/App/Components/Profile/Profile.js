/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   06-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: oocss.js
* @Last modified by:   xavi
* @Last modified time: 08-Nov-2016
*/

import React from 'react';
import {View, Text, ScrollView, StyleSheet, TouchableHighlight, AsyncStorage} from 'react-native';
import t from 'tcomb-form-native';
import Styles from '../../Styles';
import Header from '../Header/Header';
import API from '../../Utils/Api';

const type = 'View';
const TITLE = 'Update Profile';
const Form = t.form.Form;
const User = t.struct({
    firstName: t.String,
    lastName: t.String,
    email: t.String,
    changePassword: t.maybe(t.String)
});
const options = {
    auto: 'placeholders'
};

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: {},
            isLoading: true
        };
    }

    componentDidMount() {
        this.setState({
            user: {
                id: this.props.user._id,
                firstName: this.props.user.firstName,
                lastName: this.props.user.lastName,
                email: this.props.user.email,
                password: ''
            },
            isLoading: false
        });
    }

    onPress(){
        const formData = this.refs.form.getValue();
        if (formData) {
            const value = {
                id: this.state.user.id,
                firstName: formData.firstName.trim(),
                lastName: formData.lastName.trim(),
                email: formData.email.toLowerCase().trim(),
                password: formData.changePassword
            };
            const url = `api/users/${value.id}`;
            API.put(url, value).then((res) => {
                this.props.navigator.push({
                    name: 'Dashboard',
                    passProps: {
                        user: res.user
                    }
                });
            });
        }
    }
    render(){
        const USER = this.state.user;
        return (
            <View style={Styles.wrapperContent}>
                <Header
                    loadMainView={() => this.props.navigator.pop()}
                    type={type}
                    title={TITLE}
                    isLoading={this.state.isLoading} />
                <View style={Styles.form_content}>
                    <Text style={Styles.form_title}>Update your Profile</Text>
                    <Form
                        ref="form"
                        type={User}
                        options={options}
                        value={USER} />
                    <TouchableHighlight
                        style={Styles.form_button}
                        onPress={() => this.onPress()}
                        underlayColor='#262938'>
                        <Text style={Styles.form_buttonText}>Save</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

Profile.propTypes = {
    user: React.PropTypes.object.isRequired,
    navigator: React.PropTypes.object.isRequired
};

export default Profile;
