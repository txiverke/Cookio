/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   14-Nov-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 12-Dec-2016
*/

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from '../Components/Main';
import Dashboard from '../Components/Dashboard';
import SignIn from '../Components/Authentication/SignIn';
import SignUp from '../Components/Authentication/SignUp';
import Guest from '../Components/Guest/Guest';

export default (
    <Route path="/" component={Main}>
        <Route path="sign-in" component={SignIn} />
        <Route path="sign-up" component={SignUp} />
        <Route path="guest/:username" component={Guest}
        <IndexRoute component={Dashboard} />
    </Route>
);
