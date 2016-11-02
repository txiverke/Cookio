/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   06-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: oocss.js
* @Last modified by:   xavi
* @Last modified time: 02-Nov-2016
*/

import React from 'react';
import {View, Text, ScrollView, StyleSheet, TouchableHighlight, AsyncStorage} from 'react-native';
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
    changePassword: t.maybe(t.String)
});
const options = {};

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
