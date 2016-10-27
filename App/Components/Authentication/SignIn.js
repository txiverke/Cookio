/**
* @Author: Vilà Albiol, Xavi <txiverke>
* @Date:   19-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   txiverke
* @Last modified time: 25-Oct-2016
*/

import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet, AsyncStorage} from 'react-native';
import t from 'tcomb-form-native';
import API from '../../Utils/Api';
import SignUp from './SignUp';

const Form = t.form.Form;
const User = t.struct({
    username: t.String,
    password: t.String
});
const options = {};

class SignIn extends React.Component {
    onPress(){
        const formData = this.refs.form.getValue();
        if (formData) {
            const value = {
                username: formData.username.toLowerCase().trim(),
                password: formData.password.toLowerCase().trim()
            };
            API.user.signin(value).then((res) => {
                console.log('res',res)
                if (res.success) {
                    AsyncStorage.setItem('isLoggedIn', JSON.stringify(res.user));
                    this.props.navigator.push({
                        name: 'Dashboard',
                        passProps: {
                            user: res.user
                        }
                    });
                } else {
                    console.log('err', res)
                }

            });
        }
    }
    render() {
        return (
            <View style={styles.container}>
                {/* display */}
                <Form ref="form" type={User} options={options} />
                <TouchableHighlight style={styles.button} onPress={() => this.onPress()} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.button}
                    onPress={() => this.props.navigator.push({name: 'SignUp'})}
                    underlayColor='#99d9f4'>
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

export default SignIn;
