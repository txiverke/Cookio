/**
* @Author: Vilà Albiol, Xavi <txiverke>
* @Date:   18-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   txiverke
* @Last modified time: 25-Oct-2016
*/

import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const SUBCOLOR  = '#4ECDC4';
const MAINCOLOR = '#ff3366';
const TEXTCOLOR = '#262938';

const styles = StyleSheet.create({
    wrapperContent: {
        flex:1,
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    buttonViewWrapper: {
        position: 'absolute',
        bottom: 15,
        right: 15,
        width: 45,
        height: 45,
    },
    buttonViewLeft: {
        position: 'absolute',
        bottom: 15,
        left: 15,
        width: 45,
        height: 45,
    },
    buttonView: {
        width:45,
        height:45
    },
    header: {
        flex: 1,
        height: 75,
        flexDirection: 'row',
        backgroundColor: '#ffffff'
    },
    header_leftButton: {
        flex: 1/4,
        marginTop: 35,
    },
    header_imageMenu: {
        width: 25,
        height: 25,
        marginLeft: 15
    },
    header_title: {
        flex: 2/4,
        marginTop: 38,
        fontSize:16,
        fontWeight: 'bold',
        color: TEXTCOLOR,
        textAlign: 'center'
    },
    header_rightButton: {
        flex: 1/4,
        marginTop: 38,
    },
    header_loader: {
        marginLeft: 35
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f1f1f1',
        height: height,
    },
    content_imageFullWidth: {
        flex: 1,
        flexDirection: 'column',
        resizeMode: 'contain',
        width: width,
        height: height * 0.45,
        marginTop: 0
    },
    content_avatar: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'rgba(0,0,0,0.6)',
        marginTop: -100,
        height: 50,

    },
    content_avatarImgWrapper: {
        flex: 1/5,
        flexDirection: 'column',
        alignItems: 'center'
    },
    content_avatarImg: {
        marginTop: 3,
        width: 44,
        height: 44,
        borderRadius: 24,
    },
    content_avatarLeft:{
        flex: 2/5,
        backgroundColor: 'transparent',
        textAlign: 'right',
        fontWeight: 'bold',
        marginTop: 16,
        fontSize: 14,
        color: 'white'
    },
    content_avatarRight: {
        flex: 2/5,
        backgroundColor: 'transparent',

    },
    content_avatarTxt: {
        marginTop: 11,
        textAlign: 'left',
        fontSize: 11,
        color: 'white'
    },
    content_avatarSymbol: {
        color: MAINCOLOR
    },
    content_paragraph: {
        padding: 20,
        fontSize: 15,
        fontStyle: 'italic'
    },
    content_list: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
        height: 30,
    },
    content_listTitle: {
        flex: 3/4,
        fontSize: 11
    },
    content_listValue: {
        marginTop: -5,
        flex: 1/4,
        fontWeight: 'bold',
        textAlign: 'right',
        fontSize: 18,
    },
    content_extraMargin: {
        paddingBottom:65
    },
    comment: {
        backgroundColor: '#f6f6f6',
        marginBottom: 15,
        padding: 10,
        borderRadius: 5
    },
    comment_authorWrapper: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 5
    },
    comment_author: {
        flex: 3/4,
        flexDirection: 'row'
    },
    comment_authorSmall: {
        fontSize: 11,
    },
    comment_number: {
        flex: 1/4,
        textAlign: 'right',
        color: MAINCOLOR
    },
    comment_title: {
        fontSize: 11,
        marginTop: 5,
        marginBottom: 15
    },
    comment_wrapper: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    comment_paragraph: {
        fontStyle: 'italic'
    },
    title: {
        marginTop: 35,
        fontSize:18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: MAINCOLOR,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    image: {
        height: 350,
    },
    searchInput: {
        height: 50,
        padding: 4,
        marginRight: 5,
        fontSize: 23,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: 'white'
    },
    buttonText: {
        fontSize: 18,
        color: TEXTCOLOR,
        alignSelf: 'center'
    },
    button: {
       height: 45,
       flexDirection: 'row',
       backgroundColor: 'white',
       borderColor: 'white',
       borderWidth: 1,
       borderRadius: 8,
       marginBottom: 10,
       marginTop: 10,
       alignSelf: 'stretch',
       justifyContent: 'center'
   },
   mapContainer: {
       position: 'absolute',
       top: 0,
       left: 0,
       right: 0,
       bottom: 0,
       justifyContent: 'flex-end',
  },
   map: {
       position: 'absolute',
       top: 75,
       left: 0,
       right: 0,
       bottom: 0,
   },
   menu: {
        flex: 1,
        width: width,
        height: height,
        backgroundColor: TEXTCOLOR
   },
   avatarContainer: {
       paddingTop: 35,
       paddingLeft: 20,
       paddingBottom: 20,
       backgroundColor: '#232531'
   },
   avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        flex: 1,
   },
   name: {
        position: 'absolute',
        left: 80,
        top: 40,
        color: '#f1f1f1',
        fontSize: 16,
        fontWeight: 'bold'
   },
   email: {
       position: 'absolute',
       left: 80,
       top: 60,
       color: MAINCOLOR,
       fontSize: 14,
       fontStyle: 'italic'
   },
   itemMenu: {
       flex:1,
       flexDirection: 'row',
       justifyContent: 'flex-start',
       height: 60
   },
   item: {
        fontSize: 17,
        fontWeight: '300',
        padding: 20,
        color: '#f1f1f1',
   },
   itemIcon: {
       marginTop: 19,
       marginLeft: 20,
       width: 25,
       height: 25
   },
   separator: {
       height: 1,
       backgroundColor: '#e6e6e6',
       flex: 1,
       marginLeft: 0,
       marginBottom: 15
   },
});

export default styles;
