/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   02-Nov-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 03-Nov-2016
*/

import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, AsyncStorage } from 'react-native';
import MapView from 'react-native-maps';
import t from 'tcomb-form-native';
import _ from 'lodash';
import API from '../../Utils/Api';

const Form = t.form.Form;

let Stylesheet = _.cloneDeep(t.form.Form.stylesheet);
Stylesheet.textbox.normal.height = 100;
const Event = t.struct({
    title: t.String,
    description: t.String,
    price: t.String
});
const options = {
    fields: {
        description: {
            stylesheet: Stylesheet,
            multiline: true
        }
    }
};

class Create extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            event:''
        };
    }
    onPress(){
        const formData = this.refs.form.getValue();
        if (formData) {
            const value = {
                title: formData.title.trim(),
                description: formData.description.trim(),
                price: formData.price.trim(),
            };
            const url = 'api/events';
            API.post(url, value).then((res) => {
                if (res.success) {
                    console.log('res', res.event)
                } else {
                    console.log('err', err)
                }
            });
        }
    }

    render(){
        const EVENT = this.state.event;
        return (
            <View style={styles.container}>
                <Form
                    ref="form"
                    type={Event}
                    options={options}
                    value={EVENT} />
                <TouchableHighlight style={styles.button} onPress={() => this.onPress()} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Save Event</Text>
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

export default Create;
