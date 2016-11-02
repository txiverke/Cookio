/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   28-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 28-Oct-2016
*/

import React from 'react';
import {TouchableHighlight, Image} from 'react-native';
import Styles from '../../Styles';

class ButtonSwitchComponent extends React.Component {
    loadMap() {
        if (this.props.currentComponent === 'list') {
            this.props.renderComponent('map');
        } else {
            this.props.renderComponent('list');
        }
    }
    render(){
        const currentButton = (this.props.currentComponent === 'map') ?
            require('../../Assets/listButton.png') :
            require('../../Assets/locationButton.png');

        return (
            <TouchableHighlight
                style={Styles.buttonViewLeft}
                onPress={() => this.loadMap()}
                underlayColor='transparent' >
                <Image
                    style = {Styles.buttonView}
                    source = {currentButton} />
            </TouchableHighlight>
        );
    }
}

ButtonSwitchComponent.propTypes = {
    renderComponent: React.PropTypes.func.isRequired,
    currentComponent: React.PropTypes.string.isRequired
};

export default ButtonSwitchComponent;
