/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   14-Nov-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 15-Nov-2016
*/

import React from 'react';
import Header from './Header/Header';

const Main = ({history, children}) => {
    return (
        <div className="main-wrapper">
            <Header />
            <div className="wrapper">
                {children}
            </div>
        </div>
    );
};

export default Main;
