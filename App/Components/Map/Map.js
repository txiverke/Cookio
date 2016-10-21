/**
* @Author: Vilà Albiol, Xavi <txiverke>
* @Date:   18-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   txiverke
* @Last modified time: 21-Oct-2016
*/

import React from 'react';
import {View, Dimensions, AsyncStorage} from 'react-native';
import MapView from 'react-native-maps';
import SideMenu from 'react-native-side-menu';
import ButtonCenterMap from './ButtonCenterMap';
import Styles from '../../Styles';
import Constants from '../Helpers/Constants';
import Menu from '../Menu/Menu.js';
import Header from '../Header/Header.js';
import Api from '../../Utils/Api';

const MAPCONSTANTS = Constants.getMapConstants();
const MARKER = require('../../Assets/marker.png');
const TITLE = 'Cookio'

class Map extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: {},
            region: {
                latitude: MAPCONSTANTS.latitude,
                longitude: MAPCONSTANTS.longitude,
                latitudeDelta: MAPCONSTANTS.latitudeDelta,
                longitudeDelta: MAPCONSTANTS.longitudeDelta
            },
            markers: [],
            isOpen: false,
            isLoading: true,
            getUserInfo: true
        };
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    region: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: MAPCONSTANTS.latitudeDelta,
                        longitudeDelta: MAPCONSTANTS.longitudeDelta
                    }
                });
            },
            (error) => alert(JSON.stringify(error)),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );

        this.watchID = navigator.geolocation.watchPosition(
            (position) => {
                const newRegion = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: MAPCONSTANTS.latitudeDelta,
                    longitudeDelta: MAPCONSTANTS.longitudeDelta
                };

            this.onRegionChange(newRegion);
        });

        Api.getMarkers('barcelona')
            .then((res) => {
                this.setState({
                    markers: res,
                    isLoading: false
                })
            });

        AsyncStorage.getItem('isLoggedIn', (err, result) => {
            this.setState({
                user: result,
                getUserInfo : false

            })
            console.log(this.state.user)
        })
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }

    onRegionChange(region){
        this.setState({region});
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    updateMenuState(isOpen) {
        this.setState({ isOpen, });
    }

    onMenuItemSelected = (item, id) => {
        this.setState({isOpen: false});
        this.props.navigator.push({
            name: item,
            passProps: { id: id }
        });
    }

    onMarkerPressed(id) {

        this.setState({ isLoading: true });

        Api.getHost(id)
            .then((res) => {
                this.props.navigator.push({
                    name: 'Host',
                    passProps: { host: res }
                });
                this.setState({ isLoading: false });
                navigator.geolocation.clearWatch(this.watchID);
            });
    }

    signOut() {
        AsyncStorage.removeItem('isLoggedIn');
        this.props.navigator.push({
            name: 'Authenticate'
        });
    }

    render() {
        if (this.state.getUserInfo) { return <View></View>}
        const menu = <Menu
            onItemSelected={this.onMenuItemSelected}
            user={this.state.user}
            signOut={() => this.signOut()}/>;
        return (
            <SideMenu
                menu={menu}
                isOpen={this.state.isOpen}
                onChange={(isOpen) => this.updateMenuState(isOpen)}
                openMenuOffset={310}
                disableGestures={false}>
                <View style={Styles.wrapperContent}>
                    <Header
                        toggle={() => this.toggle()}
                        title={TITLE}
                        isLoading={this.state.isLoading}/>
                    <MapView
                        ref="map"
                        style={Styles.map}
                        mapType="standard"
                        region={this.state.region}
                        onRegionChange={(region) => this.onRegionChange(region)}
                        showsUserLocation = {true}>
                        {this.state.markers.map((marker, index) => (
                        <MapView.Marker
                            key={index}
                            coordinate={marker.coordinate}
                            onSelect={() => this.onMarkerPressed(marker.id)} />
                        ))}
                    </MapView>
                    <ButtonCenterMap onRegionChange={(region) => this.onRegionChange(region)} />
                </View>
            </SideMenu>
        );
    }
}

Map.propTypes = {
    user: React.PropTypes.object
}

export default Map;
