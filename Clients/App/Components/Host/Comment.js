/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   17-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: oocss.js
* @Last modified by:   txiverke
* @Last modified time: 18-Oct-2016
*/

import React from 'react';
import {View, Text} from 'react-native';
import Styles from '../../Styles';

class Comment extends React.Component {
    render() {
        return (
            <View style={Styles.comment_wrapper}>
                <Text style={Styles.comment_title}>COMMENTS:</Text>
                {this.props.comments.map((comment, index) => (
                <View key={index} style={Styles.comment}>
                    <View style={Styles.comment_authorWrapper}>
                        <View style={Styles.comment_author}>
                            <Text style={Styles.comment_authorSmall}>
                            Sent by&nbsp;
                            </Text>
                            <Text style={Styles.comment_authorSmall}>
                                {comment.author}
                            </Text>
                        </View>
                        <Text style={Styles.comment_number}>
                            #{index}
                        </Text>
                    </View>
                    <Text
                        style={Styles.comment_paragraph}>
                        {comment.comment}
                    </Text>
                </View>
                ))}
            </View>
        );
    }
}

Comment.propTypes = {
    comments : React.PropTypes.array.isRequired
};

export default Comment;
