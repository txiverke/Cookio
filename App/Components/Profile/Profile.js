/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   06-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: oocss.js
* @Last modified by:   txiverke
* @Last modified time: 24-Oct-2016
*/

import React from 'react';
import {View, Text, ScrollView, StyleSheet, TouchableHighlight} from 'react-native';
import t from 'tcomb-form-native';
import Styles from '../../Styles';
import NavBar from '../Header/Header';
import API from '../../Utils/Api';

const TITLE = 'Profile';
const Form = t.form.Form;
const User = t.struct({
    firstName: t.String,
    lastName: t.String,
    email: t.String,
    password: t.maybe(t.String)
});
const options = {};

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: {
                id: this.props.user._id,
                firstName: this.props.user.firstName,
                lastName: this.props.user.lastName,
                email: this.props.user.email,
                password: ''
            },
            isLoading: true
        };
    }
    onPress(){
        const formData = this.refs.form.getValue();
        console.log('formData', formData);
        if (formData) {
            const value = {
                id: this.state.user.id,
                firstName: formData.firstName.toLowerCase().trim(),
                lastName: formData.lastName.toLowerCase().trim(),
                email: formData.email.toLowerCase().trim(),
                password: formData.password
            };
            Api.user.update(value).then((res) => {
                console.log('updata user response', res)
                /*AsyncStorage.setItem('isLoggedIn', JSON.stringify(res));
                this.props.navigator.push({
                    name: 'Map',
                    passProps: {
                        user: res
                    }
                });*/
            });
        }
    }
    render(){
        const USER = this.state.user;
        return (
            <View style={Styles.mapContainer}>
                <NavBar
                    loadMainView={() => this.props.navigator.pop()}
                    title={TITLE}
                    isLoading={this.state.isLoading}/>
                <Form
                    ref="form"
                    type={User}
                    options={options}
                    value={USER} />
                <TouchableHighlight style={styles.button} onPress={() => this.onPress()} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

Profile.propTypes = {
    user: React.PropTypes.object.isRequired,
    navigator: React.PropTypes.object.isRequired
};

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

export default Profile;
