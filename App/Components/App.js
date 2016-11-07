/**
* @Author: Vilà Albiol, Xavi <txiverke>
* @Date:   18-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 07-Nov-2016
*/

import React from 'react';
import {Navigator, AsyncStorage, View} from 'react-native';
import Routes from '../Config/Routes';
import Loader from './Helpers/Loader';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            isLoading: true,
            initialRoute: ''
        };
    }

    componentDidMount(){
        AsyncStorage.getItem('isLoggedIn', (err, result) => {
            //AsyncStorage.removeItem('isLoggedIn');
            if (result === null) {
                this.setState({
                    isLoading: false,
                    initialRoute: 'SignIn'
                });
            } else {
                this.setState({
                    isLoading: false,
                    initialRoute: 'Dashboard'
                });
            }
        });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <Loader isLoading={this.state.isLoading} />
            );
        }
        return (
            <Navigator
                initialRoute = {{name: this.state.initialRoute}}
                renderScene = {Routes.renderScene} />
        );
    }

}

export default App;
