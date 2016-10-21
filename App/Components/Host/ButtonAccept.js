/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   17-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: oocss.js
* @Last modified by:   txiverke
* @Last modified time: 18-Oct-2016
*/

import React from 'react';
import {TouchableHighlight, Image} from 'react-native';
import Styles from '../../Styles';

const ACCEPTBUTTON = require('../../Assets/acceptButton.png');

class ButtonAccept extends React.Component {
    acceptHost() {
        this.props.onAcceptHost();
    }
    render() {
        return (
            <TouchableHighlight
                style={Styles.buttonViewWrapper}
                onPress={() => this.acceptHost()}
                underlayColor='transparent'>
                <Image
                    style = {Styles.buttonView}
                    source = {ACCEPTBUTTON}/>
            </TouchableHighlight>
        );
    }
}

ButtonAccept.propTypes = {
    onAcceptHost: React.PropTypes.func.isRequired
};

export default ButtonAccept;
