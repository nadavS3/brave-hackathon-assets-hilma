import { StyleSheet, Dimensions } from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units'
import getFontName from './fontGetName'


const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        width: vw(90),
        height: vh(6.93),
        alignSelf: 'center',
        position: 'absolute',
        bottom: vh(2.6),
        marginTop: vh(4),
        backgroundColor: "#5C95E3",
        flexDirection: 'row',
    },
    container: {
        backgroundColor: "#5C95E3",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#ffffff',
        fontSize:vw(4.5)
    },
    font: {   
        fontFamily: getFontName('rubik-regular'),
    }
});
export default styles;

