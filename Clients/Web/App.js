/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   13-Nov-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 13-Dec-2016
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from './config/routes';

ReactDOM.render(
    <Router history={hashHistory}>{routes}</Router>,
    document.getElementById('app')
);
