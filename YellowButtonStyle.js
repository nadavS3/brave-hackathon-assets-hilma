import { StyleSheet, Dimensions } from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units'
import getFontName from './fontGetName'

const styles = StyleSheet.create({
    yellowView: {
        alignItems: 'center',
        justifyContent: 'center',
        width: vw(100),
        height: vh(9.82),
        top:vh(5),
        position: 'relative',
        flexDirection: 'row',
    },
    text: {
        zIndex: 12,
        color: '#001925',
        fontSize: vw(5),
        position:'absolute'
    },
    font: {
        fontFamily: getFontName('rubik-bold'),
    },
    arrowButton:{
        width:vw(3),
        height:vh(3),
        zIndex:2,
        position:'absolute',
        top:vh(3),
        right:vh(5)
    }

    });
export default styles;

