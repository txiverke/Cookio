/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   27-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 27-Oct-2016
*/

import React from 'react';
import {View, Text} from 'react-native';
import Header from '../Header/Header.js';
import Styles from '../../Styles';

const TITLE = 'Loading...';

const Loader = ({isLoading}) => {
    return (
        <View style={Styles.wrapperContent}>
            <Header
                title={TITLE}
                isLoading={isLoading} />
         </View>
    );
};

Loader.propTypes = {
    isLoading: React.PropTypes.bool.isRequired
}

export default Loader;
