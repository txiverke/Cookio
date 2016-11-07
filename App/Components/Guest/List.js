/**
* @Author: Vilà Albiol, Xavi <txiverke>
* @Date:   24-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 07-Nov-2016
*/

import React from 'react';
import {View, Text} from 'react-native';
import API from '../../Utils/Api';
import Styles from '../../Styles';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {

    }
    createEvent(){
        this.props.createEvent('list');
    }
    render() {
        return (
            <View style={Styles.wrapperContent}>
                <Text>List</Text>
            </View>
        );
    }
}

export default List;
