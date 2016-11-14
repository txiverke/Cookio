/**
* @Author: Vilà Albiol, Xavi <txiverke>
* @Date:   18-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 14-Nov-2016
*/

import React from 'react';
import App from '../Components/App';
import SignIn from '../Components/Authentication/SignIn';
import SignUp from '../Components/Authentication/SignUp';
import Dashboard from '../Components/Dashboard/Dashboard';
import Payment from '../Components/Settings/Payment';
import History from '../Components/Settings/History';
import Notifications from '../Components/Settings/Notifications';
import Profile from '../Components/Profile/Profile';
import Host from '../Components/Host/Host';

const Routes = {
    renderScene(route, navigator) {
        switch(route.name) {
            case 'Init': return <App />;
            case 'SignIn': return <SignIn navigator={navigator} {...route.passProps} />;
            case 'SignUp': return <SignUp navigator={navigator} {...route.passProps} />;
            case 'Dashboard': return <Dashboard navigator={navigator} {...route.passProps} /> ;
            case 'Host': return <Host navigator={navigator} {...route.passProps} />;
            case 'Payment': return <Payment navigator={navigator} {...route.passProps} />;
            case 'History': return <History navigator={navigator} {...route.passProps} />;
            case 'Notifications': return <Notifications navigator={navigator} {...route.passProps} />;
            case 'Profile': return <Profile navigator={navigator} {...route.passProps} />;
            default: return <NotFound />;
        }
    }
};

export default Routes;
