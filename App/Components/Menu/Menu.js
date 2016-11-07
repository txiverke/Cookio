/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   05-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: oocss.js
* @Last modified by:   xavi
* @Last modified time: 07-Nov-2016
*/

import React from 'react';
import {Dimensions, ScrollView, View, Image, Text, TouchableHighlight, AsyncStorage} from 'react-native';
import Styles from '../../Styles';
import Separator from '../Helpers/Separator';
import Api from '../../Utils/Api';
import SwitchUserType from './SwitchUserType';

const AVATAR = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';
const PAYMENT = 'Payment';
const PROFILE = 'Profile';
const NOTIFICATIONS = 'Notifications';
const HISTORY = 'History';
const SIGNOUT = 'Sign Out';

class Menu extends React.Component {
    switchUser(value) {
        this.props.switchUser(value);
    }

    render() {
        const USER = this.props.user;
        return (
            <ScrollView
                scrollsToTop={false}
                style={Styles.menu}>
                <View style={Styles.menu_avatarWrapper}>
                    <Image
                        style={Styles.menu_avatar}
                        source={require('../../Assets/default_avatar.png')} />
                    <Text style={Styles.menu_name}>{USER.fullName}</Text>
                    <Text style={Styles.menu_email}>{USER.email}</Text>
                </View>
                <Separator />
                <View style={Styles.menu_itemMenu}>
                    <Image
                        style={Styles.menu_itemIcon}
                        source={require('../../Assets/profile.png')} />
                    <Text
                        onPress={() => this.props.onItemSelected(PROFILE, USER)}
                        style={Styles.menu_item}>
                        {PROFILE}
                    </Text>
                </View>
                <View style={Styles.menu_itemMenu}>
                    <Image
                        style={Styles.menu_itemIcon}
                        source={require('../../Assets/card.png')} />
                    <Text
                        onPress={() => this.props.onItemSelected(PAYMENT, this.state.user.user._id)}
                        style={Styles.menu_item}>
                        {PAYMENT}
                    </Text>
                </View>
                <View style={Styles.menu_itemMenu}>
                    <Image
                        style={Styles.menu_itemIcon}
                        source={require('../../Assets/notifications.png')} />
                    <Text
                        onPress={() => this.props.onItemSelected(NOTIFICATIONS, this.state.user.user._id)}
                        style={Styles.menu_item}>
                        {NOTIFICATIONS}
                    </Text>
                </View>
                <View style={Styles.menu_itemMenu}>
                    <Image
                        style={Styles.menu_itemIcon}
                        source={require('../../Assets/history.png')} />
                    <Text
                        onPress={() => this.props.onItemSelected(HISTORY, this.state.user.user._id)}
                        style={Styles.menu_item}>
                        {HISTORY}
                    </Text>
                </View>
                <SwitchUserType
                    switchUser={(value) => this.switchUser(value)}
                    userType={USER.type} />
                <View style={Styles.menu_itemMenu}>
                    <Image
                        style={Styles.menu_itemIcon}
                        source={require('../../Assets/signout.png')} />
                    <Text
                        onPress={() => this.props.signOut()}
                        style={Styles.menu_item}>
                        {SIGNOUT}
                    </Text>
                </View>
            </ScrollView>
        );
    }
}

Menu.propTypes = {
    onItemSelected: React.PropTypes.func.isRequired,
    user: React.PropTypes.object.isRequired,
    signOut: React.PropTypes.func.isRequired,
    switchUser: React.PropTypes.func.isRequired
};

export default Menu;
