/**
* @Author: Vilà Albiol, Xavi <txiverke>
* @Date:   18-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 10-Nov-2016
*/

import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const SUBCOLOR  = '#4ECDC4';
const MAINCOLOR = '#ff3366';
const TEXTCOLOR = '#262938';
const BACKGROUND = '#f1f1f1';

const styles = StyleSheet.create({
    error: {
        top:15,
        textAlign: 'center',
        color: MAINCOLOR,
        fontSize: 15
    },

    /** FORM STYLES **/
    form_wrapper: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    form_content: {
        flex: 6/7,
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom:45,
        backgroundColor: 'white'
    },
    form_contentTop: {
        flex: 6/7,
        flexDirection: 'column',
        marginBottom:45,
        backgroundColor: 'white'
    },
    form_contentWrapper: {
        padding: 20,
    },
    form_title: {
        fontWeight: '100',
        fontSize: 38,
        textAlign: 'center',
        color: TEXTCOLOR,
        paddingBottom: 25,
    },
    form_button: {
        height: 45,
        backgroundColor: TEXTCOLOR,
        borderColor: TEXTCOLOR,
        borderWidth: 1,
        borderRadius: 25,
        marginTop: 10,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    form_buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center',
    },
    form_buttonPush: {
        position: 'absolute',
        top: 17,
        right: 10,
        width: 125,
    },
    form_buttonPop: {
        position: 'absolute',
        top: 17,
        left: 10,
        width: 120
    },
    form_buttonNav: {
        flex: 1,
        flexDirection: 'row'
    },
    form_buttonPushText: {
        top:1,
        flex: 3/4,
        fontSize: 15,
        marginTop: 22,
        textAlign: 'right',
        fontWeight: '100',
        color: TEXTCOLOR
    },
    form_buttonPopText: {
        top:1,
        flex: 3/4,
        fontSize: 15,
        marginTop: 22,
        textAlign: 'left',
        fontWeight: '100',
        color: TEXTCOLOR
    },
    form_buttonImageWrapper: {
        flex: 1/4,
        marginTop: 7,
        padding: 13,
        marginLeft: 0,
    },
    form_buttonPushImage: {
        width: 25,
        height: 25,
    },
    form_buttonPopImage: {
        width: 25,
        height: 25,
    },

    /** BODY WRAPPER **/
     wrapperContent: {
         flex:1,
         flexDirection: 'column',
         backgroundColor: 'white'
     },

     /** HEADER **/
     header: {
         flex: 1/7,
         flexDirection: 'row',
         backgroundColor: '#fafafa',
         height: 5
     },
     header_leftButton: {
         flex: 1/4,
         marginTop: 40,
     },
     header_imageMenu: {
         width: 25,
         height: 25,
         marginLeft: 15
     },
     header_title: {
         flex: 2/4,
         marginTop: 42,
         fontSize:16,
         fontWeight: '100',
         color: TEXTCOLOR,
         textAlign: 'center'
     },
     header_rightButton: {
         flex: 1/4,
         marginTop: 40,
     },
     header_loader: {
         marginLeft: 35
     },

     /** MENU **/
     menu: {
         flex: 1,
         width: width,
         height: height,
         backgroundColor: TEXTCOLOR
     },
     menu_avatarWrapper: {
         paddingTop: 35,
         paddingLeft: 20,
         paddingBottom: 20,
         backgroundColor: '#232531'
     },
     menu_avatar: {
          width: 48,
          height: 48,
          borderRadius: 24,
          flex: 1,
     },
     menu_name: {
          position: 'absolute',
          left: 80,
          top: 40,
          color: '#f1f1f1',
          fontSize: 16,
          fontWeight: 'bold'
     },
     menu_email: {
         position: 'absolute',
         left: 80,
         top: 60,
         color: MAINCOLOR,
         fontSize: 14,
         fontStyle: 'italic'
     },
     menu_itemMenu: {
         flex:1,
         flexDirection: 'row',
         justifyContent: 'flex-start',
         height: 60
     },
     menu_item: {
          fontSize: 17,
          fontWeight: '300',
          padding: 20,
          color: '#f1f1f1',
     },
     menu_itemIcon: {
         marginTop: 19,
         marginLeft: 20,
         width: 25,
         height: 25
     },

     /** CONTENT **/
     content_wrapper: {
        top: 0,
        flex: 6/7,
        flexDirection: 'column',
        justifyContent: 'center',
     },
     content_wrapperMap: {
         top: 0,
         flex: 19/20,
         flexDirection: 'column'
     },
     content_wrapperMapForm: {
         top: 0,
         height: 200,
     },

     /** EVENT ITEM **/
     event: {
         flex: 1,
         flexDirection: 'row',
         borderRadius: 5,
         borderColor: BACKGROUND,
         borderWidth: 1,
         marginBottom: 15
     },
     event_content: {
         flex: 3/4,
         padding: 10
     },
     event_title: {
         fontSize: 17
     },
     event_buttons: {
         flex: 1/4,
         flexDirection: 'column'
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
   map: {
       position: 'absolute',
       top: 75,
       left: 0,
       right: 0,
       bottom: 0,
   },


   separator: {
       height: 1,
       backgroundColor: '#e6e6e6',
       marginLeft: 0,
       marginBottom: 15
   },
});

export default styles;
