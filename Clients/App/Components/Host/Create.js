/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   02-Nov-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 11-Nov-2016
*/

import React from 'react';
import {View, ScrollView, Text, StyleSheet, TouchableHighlight, AsyncStorage} from 'react-native';
import MapView from 'react-native-maps';
import t from 'tcomb-form-native';
import _ from 'lodash';
import API from '../../Utils/Api';
import Styles from '../../Styles';
import Constants from '../Helpers/Constants';

let Stylesheet = _.cloneDeep(t.form.Form.stylesheet);
Stylesheet.textbox.normal.height = 100;

const MAPCONSTANTS = Constants.getMapConstants();
const Form = t.form.Form;
const Event = t.struct({
    event_date: t.Date,
    title: t.String,
    description: t.String,
    price: t.String,
});
const options = {
    auto: 'placeholders',
    fields: {
        description: {
            stylesheet: Stylesheet,
            multiline: true
        },
        event_date: {
            label: 'Select the Event\'s date',
            minimumDate: new Date()
        }
    }
};

class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: MAPCONSTANTS.latitude,
                longitude: MAPCONSTANTS.longitude,
                latitudeDelta: MAPCONSTANTS.latitudeDelta,
                longitudeDelta: MAPCONSTANTS.longitudeDelta
            },
        }
    }
    onPress(){
        this.props.isLoading(true);
        const formData = this.refs.form.getValue();

        console.log('formData', formData)

        if (formData) {
            const url = 'api/events';
            const value = {
                title: formData.title.trim(),
                description: formData.description.trim(),
                price: formData.price.trim(),
                event_date: Date(formData.date),
                state: 'Active',
                creator: this.props.hostId
            };
            console.log('value', value)
            API.post(url, value).then((res) => {
                if (res.success) {
                    this.props.loadComponent('list');
                } else {
                    console.log('err', err)
                }
            });
        }
    }

    render(){
        return (
            <View style={Styles.form_contentTop}>
                <MapView
                    ref="map"
                    style={Styles.content_wrapperMapForm}
                    mapType="standard"
                    region={this.state.region}
                    showsUserLocation = {true}>
                </MapView>
                <ScrollView style={Styles.form_contentWrapper}>
                    <Form
                        ref="form"
                        type={Event}
                        options={options}
                    />
                    <TouchableHighlight
                        style={Styles.form_button}
                        onPress={() => this.onPress()}
                        underlayColor='#262938'>
                        <Text style={Styles.form_buttonText}>Save Event</Text>
                    </TouchableHighlight>
                </ScrollView>
            </View>
        );
    }
}

Create.propTypes = {
    hostId: React.PropTypes.string.isRequired,
    isLoading: React.PropTypes.func.isRequired
};

export default Create;
