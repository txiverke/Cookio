/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   02-Nov-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 07-Nov-2016
*/

import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight, AsyncStorage} from 'react-native';
import MapView from 'react-native-maps';
import t from 'tcomb-form-native';
import _ from 'lodash';
import API from '../../Utils/Api';
import Styles from '../../Styles';

let Stylesheet = _.cloneDeep(t.form.Form.stylesheet);
Stylesheet.textbox.normal.height = 100;

const Form = t.form.Form;
const Event = t.struct({
    title: t.String,
    description: t.String,
    price: t.String
});
const options = {
    auto: 'placeholders',
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
            <View style={Styles.form_contentTop}>
                <Form
                    ref="form"
                    type={Event}
                    options={options}
                    value={EVENT} />
                <TouchableHighlight
                    style={Styles.form_button}
                    onPress={() => this.onPress()}
                    underlayColor='#262938'>
                    <Text style={Styles.form_buttonText}>Save Event</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default Create;
