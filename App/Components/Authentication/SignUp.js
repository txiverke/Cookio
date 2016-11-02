/**
* @Author: Vilà Albiol, Xavi <txiverke>
* @Date:   24-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 02-Nov-2016
*/

import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight, AsyncStorage} from 'react-native';
import t from 'tcomb-form-native';
import API from '../../Utils/Api';

const Form = t.form.Form;
const User = t.struct({
    firstName: t.String,
    lastName: t.String,
    username: t.String,
    email: t.String,
    password: t.String
});
const options = {};

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
                    console.log('err', err)
                }
            });
        }
    }
    render(){
        const USER = this.state.user;
        return (
            <View style={styles.container}>
                <Form
                    ref="form"
                    type={User}
                    options={options}
                    value={USER} />
                <TouchableHighlight style={styles.button} onPress={() => this.onPress()} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

export default SignUp;
