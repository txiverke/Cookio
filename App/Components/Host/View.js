/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   10-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: oocss.js
* @Last modified by:   txiverke
* @Last modified time: 18-Oct-2016
*/

import React from 'react';
import {View, ScrollView, Text, Image, Dimensions} from 'react-native';
import Styles from '../../Styles';
import Header from '../Header/Header';
import ImageSlider from 'react-native-image-slider';
import Avatar from './Avatar';
import ListOfValues from './ListOfValues';
import Separator from '../Helpers/Separator';
import Comment from './Comment';
import ButtonAccept from './ButtonAccept';

const AVATAR = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';
const PRICE = 'PRICE';

class Host extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            host: {
                id: this.props.host.id,
                name: this.props.host.host_name,
                title: this.props.host.title,
                background: this.props.host.image,
                avatar: this.props.host.avatar ? this.props.host.avatar : AVATAR,
                description: this.props.host.description,
                price: this.props.host.price,
                comments: this.props.host.comments,
                valoration: this.props.host.valoration,
            },
            isLoading: false
        };
    }
    onAcceptHost(){
        console.log('Accepting Host');
    }
    render(){
        return (
            <View style={Styles.wrapperContent}>
                <Header
                    title={this.state.host.title}
                    loadMainView={() => this.props.navigator.pop()}
                    isLoading={this.state.isLoading}/>
                <ScrollView style={Styles.content}>
                    <ImageSlider height={300} images={this.state.host.background} />
                    <Avatar
                        name={this.state.host.name}
                        uri={this.state.host.avatar}
                        valoration={this.state.host.valoration} />
                    <Text style={Styles.content_paragraph}>{this.state.host.description}</Text>
                    <Separator />
                    <ListOfValues title={PRICE} value={this.state.host.price} />
                    <Separator />
                    <Comment comments={this.state.host.comments} />
                    <Text style={Styles.content_extraMargin}></Text>
                </ScrollView>
                <ButtonAccept onAcceptHost={() => this.onAcceptHost()}/>
            </View>
        );
    }
}

Host.propTypes = {
    host: React.PropTypes.object.isRequired
};

export default Host;
