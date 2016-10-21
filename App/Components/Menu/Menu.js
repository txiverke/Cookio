/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   05-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: oocss.js
* @Last modified by:   txiverke
* @Last modified time: 21-Oct-2016
*/

import React from 'react';
import {Dimensions, ScrollView, View, Image, Text, TouchableHighlight, AsyncStorage} from 'react-native';
import Styles from '../../Styles';
import Separator from '../Helpers/Separator';
import Api from '../../Utils/Api';

const AVATAR = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';
const window = Dimensions.get('window');
const PAYMENT = 'Payment';
const PROFILE = 'Profile';
const NOTIFICATIONS = 'Notifications';
const HISTORY = 'History';
const SIGNOUT = 'Sign Out';
const sections = [
    {"text": PAYMENT},
    {"text": PROFILE},
    {"text": NOTIFICATIONS},
    {"text": HISTORY},
    {"text": SIGNOUT}
];

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: JSON.parse(this.props.user)
        };
    }

    render() {
        const USER = this.state.user.user;
        return (
            <ScrollView
                scrollsToTop={false}
                style={Styles.menu}>
                <View style={Styles.avatarContainer}>
                    <Image
                        style={Styles.avatar}
                        source={{uri: AVATAR}}/>
                    <Text style={Styles.name}>{USER.fullName}</Text>
                    <Text style={Styles.email}>{USER.email}</Text>
                </View>
                <Separator />
                <View style={Styles.itemMenu}>
                    <Image
                        style={Styles.itemIcon}
                        source={require('../../Assets/profile.png')} />
                    <Text
                        onPress={() => this.props.onItemSelected(PROFILE, this.state.user.user._id)}
                        style={Styles.item}>
                        {PROFILE}
                    </Text>
                </View>
                <View style={Styles.itemMenu}>
                    <Image
                        style={Styles.itemIcon}
                        source={require('../../Assets/card.png')} />
                    <Text
                        onPress={() => this.props.onItemSelected(PAYMENT, this.state.user.user._id)}
                        style={Styles.item}>
                        {PAYMENT}
                    </Text>
                </View>
                <View style={Styles.itemMenu}>
                    <Image
                        style={Styles.itemIcon}
                        source={require('../../Assets/notifications.png')} />
                    <Text
                        onPress={() => this.props.onItemSelected(NOTIFICATIONS, this.state.user.user._id)}
                        style={Styles.item}>
                        {NOTIFICATIONS}
                    </Text>
                </View>
                <View style={Styles.itemMenu}>
                    <Image
                        style={Styles.itemIcon}
                        source={require('../../Assets/history.png')} />
                    <Text
                        onPress={() => this.props.onItemSelected(HISTORY, this.state.user.user._id)}
                        style={Styles.item}>
                        {HISTORY}
                    </Text>
                </View>
                <View style={Styles.itemMenu}>
                    <Image
                        style={Styles.itemIcon}
                        source={require('../../Assets/back.png')} />
                    <Text
                        onPress={() => this.props.signOut()}
                        style={Styles.item}>
                        {SIGNOUT}
                    </Text>
                </View>
            </ScrollView>

        );
    }
}

Menu.propTypes = {
    onItemSelected: React.PropTypes.func.isRequired,
    user: React.PropTypes.string.isRequired,
    signOut: React.PropTypes.func
};

export default Menu;
