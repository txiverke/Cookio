/**
* @Author: Vilà Albiol, Xavi <txiverke>
* @Date:   18-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 08-Nov-2016
*/

import React from 'react';
import {View, Dimensions, AsyncStorage} from 'react-native';
import MapView from 'react-native-maps';
import ButtonCenterMap from './ButtonCenterMap';
import Styles from '../../Styles';
import Constants from '../Helpers/Constants';
import Api from '../../Utils/Api';

const MAPCONSTANTS = Constants.getMapConstants();
const MARKER = require('../../Assets/marker.png');

class Map extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            region: {
                latitude: MAPCONSTANTS.latitude,
                longitude: MAPCONSTANTS.longitude,
                latitudeDelta: MAPCONSTANTS.latitudeDelta,
                longitudeDelta: MAPCONSTANTS.longitudeDelta
            },
            markers: []
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
                this.props.isLoading(false);
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
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }

    onRegionChange(region){
        this.setState({region});
    }

    onMarkerPressed(id) {
        this.props.isLoading(false);
        Api.getHost(id)
            .then((res) => {
                this.props.navigator.push({
                    name: 'Host',
                    passProps: {host: res}
                });
                navigator.geolocation.clearWatch(this.watchID);
            });
    }

    render() {
        return (
            <MapView
                ref="map"
                style={Styles.content_wrapperMap}
                mapType="standard"
                region={this.state.region}
                onRegionChange={(region) => this.onRegionChange(region)}
                showsUserLocation = {true}>
                {this.state.markers.map((marker, index) => (
                    <MapView.Marker
                        key={index}
                        coordinate={marker.coordinate}
                        onSelect={() => this.onMarkerPressed(marker.id)} />
                    ))
                }
                <ButtonCenterMap onRegionChange={(region) => this.onRegionChange(region)} />
            </MapView>
        );
    }
}

Map.propTypes = {
    isLoading: React.PropTypes.func.isRequired
};

export default Map;
