/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   18-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: oocss.js
* @Last modified by:   txiverke
* @Last modified time: 18-Oct-2016
*/

import React from 'react';
import {Text} from 'react-native';
import Styles from '../../Styles';

const FULL = '★';
const EMPTY = '☆';

class Valoration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }
    componentDidMount() {
        let value = '';
        const hostVal = this.props.value;

        for (let i = 0; i < 5; i++) {
            if (i < hostVal) {
                value += FULL;
            } else {
                value += EMPTY;
            }
        }
        this.setState({
            value: value
        });
    }
    render() {
        return (
            <Text style={Styles.content_avatarSymbol}>{this.state.value}</Text>
        );
    }
}

Valoration.propTypes = {
    value: React.PropTypes.number.isRequired
};

export default Valoration;
