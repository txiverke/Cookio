/**
* @Author: Vilà Albiol, Xavi <txiverke>
* @Date:   19-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 07-Nov-2016
*/

import React from 'react';
import {View, Text, Image, TouchableHighlight, StyleSheet, AsyncStorage} from 'react-native';
import t from 'tcomb-form-native';
import API from '../../Utils/Api';
import SignUp from './SignUp';
import Styles from '../../Styles';
import Separator from '../Helpers/Separator';

const Form = t.form.Form;
const User = t.struct({
    username: t.String,
    password: t.String
});
const options = {
    auto: 'placeholders',
    fields: {
        username: {},
        password: {}
    }
};

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
    }
    onPress(){
        const formData = this.refs.form.getValue();
        this.setState({message: ''});
        if (formData) {
            const value = {
                username: formData.username.toLowerCase().trim(),
                password: formData.password.trim()
            };
            API.post('signin', value).then((res) => {
                if (res.success) {
                    AsyncStorage.setItem('isLoggedIn', JSON.stringify(res.user));
                    this.props.navigator.push({
                        name: 'Dashboard',
                        passProps: {
                            user: res.user
                        }
                    });
                } else {
                    this.setState({
                        message : 'Something was wrong!'
                    });
                }
            });
        }
    }
    render() {
        return (
            <View style={Styles.form_wrapper}>
                <View style={Styles.header}>
                    <TouchableHighlight
                        style={Styles.form_buttonPush}
                        onPress={() => this.props.navigator.push({name: 'SignUp'})}
                        underlayColor='transparent'>
                        <View style={Styles.form_buttonNav}>
                            <Text style={Styles.form_buttonPushText}>Register</Text>
                            <View style={Styles.form_buttonImageWrapper}>
                                <Image
                                    style={Styles.form_buttonPushImage}
                                    source={require('../../Assets/up.png')} />
                            </View>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={Styles.form_content}>
                    <Text style={Styles.form_title}>Sign In to Cookio</Text>
                    <Form ref="form" type={User} options={options} />
                    <TouchableHighlight
                        style={Styles.form_button}
                        onPress={() => this.onPress()}
                        underlayColor='#262938'>
                        <Text style={Styles.form_buttonText}>Sign In</Text>
                    </TouchableHighlight>
                    <Text style={Styles.error}>{this.state.message}</Text>
                </View>
            </View>
        );
    }
}

export default SignIn;
