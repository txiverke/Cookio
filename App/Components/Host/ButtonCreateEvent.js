/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   07-Nov-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 07-Nov-2016
*/

import React from 'react';
import {TouchableHighlight, Image} from 'react-native';
import Styles from '../../Styles';

const CREATEEVENT = require('../../Assets/create.png');

class ButtonCreateEvent extends React.Component {
    createEvent() {
        this.props.createEvent();
    }
    render() {
        return (
            <TouchableHighlight
                style={Styles.buttonViewWrapper}
                onPress={() => this.createEvent()}
                underlayColor='transparent'>
                <Image
                    style = {Styles.buttonView}
                    source = {CREATEEVENT}/>
            </TouchableHighlight>
        );
    }
}

React.propTypes = {
    createEvent: React.PropTypes.func.isRequired
};

export default ButtonCreateEvent;
