/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   01-Nov-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 09-Nov-2016
*/

import React from 'react';
import {View, Text} from 'react-native';
import Header from '../Header/Header';
import Styles from '../../Styles';
import Create from './Create';
import List from './List';
import API from '../../Utils/Api';

const type = 'View';
const components = {
    create: {
        name: Create,
        title: 'Create a new Event'
    },
    list: {
        name: List,
        title: 'Events created'
    }
};

class Host extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            isLoading: true,
            currentComponent: 'list'
        };
    }

    componentDidMount() {
        this.getEventsList();
    }

    getEventsList() {
        const id = this.props.user._id;
        const url = `api/events/list/${id}`;
        API.get(url).then((res) => {
            if (res.success) {
                this.setState({
                    events: res.events,
                    isLoading: false
                });
            } else {
                console.log(res)
            }
            this.setState({ isLoading: false });
        });
    }

    renderComponent(value) {
        this.getEventsList();
        this.setState({ currentComponent: value });
    }

    toggleMenu() {
        this.props.toggleMenu();
    }

    setLoader(value) {
        this.setState({
            isLoading: value
        });
    }

    render() {
        const CurrentComponent = components[this.state.currentComponent].name;
        const currentTitle = components[this.state.currentComponent].title;
        return (
            <View style={Styles.wrapperContent}>
                <Header
                    toggleMenu={() => this.toggleMenu()}
                    type={type}
                    title={currentTitle}
                    isLoading={this.state.isLoading} />
                <CurrentComponent
                    hostId={this.props.user._id}
                    events={this.state.events}
                    isLoading={(value) => this.setLoader(value) }
                    loadComponent={(value) => this.renderComponent(value)}
                />
            </View>
        );
    }
}

Host.propTypes = {
    user: React.PropTypes.object.isRequired,
};

export default Host;
