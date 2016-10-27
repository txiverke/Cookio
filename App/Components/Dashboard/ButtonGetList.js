/**
* @Author: Vilà Albiol, Xavi <txiverke>
* @Date:   25-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 27-Oct-2016
*/

import React from 'react';
import {TouchableHighlight, Image} from 'react-native';
import Styles from '../../Styles';

class ButtonGetList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }
    loadList() {
        if (!this.state.active) {
            console.log('loadList');
            this.setState({active: true});
            this.props.renderComponent('list');
        }
    }
    render() {
        const currentButton = this.state.active ?
            require('../../Assets/listButton.png') :
            require('../../Assets/listButton.png');
        return (
            <TouchableHighlight
                style={Styles.buttonViewLeft}
                onPress={() => this.loadList()}
                underlayColor='transparent' >
                <Image
                    style = {Styles.buttonView}
                    source = {currentButton} />
            </TouchableHighlight>
        );
    }
}

ButtonGetList.propTypes = {
    renderComponent: React.PropTypes.func.isRequired
};

export default ButtonGetList;
