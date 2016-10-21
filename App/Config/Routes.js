/**
* @Author: Vilà Albiol, Xavi <txiverke>
* @Date:   18-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   txiverke
* @Last modified time: 20-Oct-2016
*/



import React from 'react';
import Authenticate from '../Components/Authenticate/Authenticate';
import Map from '../Components/Map/Map';
import Payment from '../Components/Settings/Payment';
import History from '../Components/Settings/History';
import Notifications from '../Components/Settings/Notifications';
import Profile from '../Components/Settings/Profile';
import Host from '../Components/Host/Host';

const Routes = {
    renderScene(route, navigator) {
        console.log('route->', route)
        if (route.name === 'SignUp') return <SignUp navigator={navigator} />;
        if (route.name === 'Authenticate') return <Authenticate navigator={navigator} {...route.passProps} />;
        if (route.name === 'Map') return <Map navigator={navigator} />;
        if (route.name === 'Host') return <Host navigator={navigator} {...route.passProps} />;
        if (route.name === 'Payment') return <Payment navigator={navigator} {...route.passProps} />;
        if (route.name === 'History') return <History navigator={navigator} {...route.passProps} />;
        if (route.name === 'Notifications') return <Notifications navigator={navigator} {...route.passProps} />;
        if (route.name === 'Profile') return <Profile navigator={navigator} {...route.passProps} />;
    }
};

export default Routes;
