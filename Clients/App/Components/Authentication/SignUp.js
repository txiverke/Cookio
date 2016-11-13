/**
* @Author: Vilà Albiol, Xavi <txiverke>
* @Date:   24-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 09-Nov-2016
*/

import React from 'react';
import {View, Text, Image, StyleSheet, TouchableHighlight, AsyncStorage} from 'react-native';
import t from 'tcomb-form-native';
import API from '../../Utils/Api';
import Styles from '../../Styles';
import Separator from '../Helpers/Separator';

const Form = t.form.Form;
const User = t.struct({
    firstName: t.String,
    lastName: t.String,
    username: t.String,
    email: t.String,
    password: t.String
});
const options = {
    auto: 'placeholders'
};

class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true
        };
    }
    onPress(){
        const formData = this.refs.form.getValue();
        if (formData) {
            const typeOfUser = formData.registerAsHost ? 'host' : 'guest';
            const value = {
                firstName: formData.firstName.trim(),
                lastName: formData.lastName.trim(),
                username: formData.username.toLowerCase().trim(),
                email: formData.email.toLowerCase().trim(),
                password: formData.password
            };
            API.post('signup', value).then((res) => {
                if (res.success) {
                    AsyncStorage.setItem('isLoggedIn', JSON.stringify(res.user));
                    this.props.navigator.push({
                        name: 'Dashboard',
                        passProps: {
                            user: res.user
                        }
                    });
                } else {
                    console.log('err', res.message)
                }
            });
        }
    }
    render(){
        return (
            <View style={Styles.form_wrapper}>
                <View style={Styles.header}>
                    <TouchableHighlight
                        style={Styles.form_buttonPop}
                        onPress={() => this.props.navigator.pop()}
                        underlayColor='transparent'>
                        <View style={Styles.form_buttonNav}>
                            <View style={Styles.form_buttonImageWrapper}>
                                <Image
                                    style={Styles.form_buttonPopImage}
                                    source={require('../../Assets/back.png')} />
                            </View>
                            <Text style={Styles.form_buttonPopText}>Sign In</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={Styles.form_content}>
                    <View style={Styles.form_contentWrapper}>
                        <Text style={Styles.form_title}>Register to Cookio</Text>
                        <Form
                            ref="form"
                            type={User}
                            options={options} />
                        <TouchableHighlight
                            style={Styles.form_button}
                            onPress={() => this.onPress()}
                            underlayColor='#262938'>
                            <Text style={Styles.form_buttonText}>Register</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }
}

export default SignUp;
