import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
//style
import { vh, vw } from 'react-native-expo-viewport-units'
import * as Font from 'expo-font'
import getFontName from './fontGetName'
/*
receives as props
onPress : function,  a function that will be called when user presses on button
*/
export default function buttons({ onPress }) {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        (async () => {
            if (Platform.OS === 'ios') {
                await Font.loadAsync({
                    'rubik-bold': require('./assets/fonts/Rubik-Bold.ttf'),
                })
            } else {
                await Font.loadAsync({
                    'rubikBold': require('./assets/fonts/Rubik-Bold.ttf'),
                })
            }
            setLoaded(true)
        })()
    }, [])

    return (
        <TouchableOpacity style={styles.touchable} onPress={onPress}>
            <Text style={[styles.text, loaded && styles.rubicFont]}>הרשם עם מייל וסיסמא</Text>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    rubicFont: {
        fontFamily: getFontName('rubik-bold'),
    },
    touchable: {
        backgroundColor: '#fff',
        height: vh(7.5),
        width: vw(89.5),
        borderRadius: vh(7.5 / 2),
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#5C95E3',
        borderWidth: 2
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: vh(2.5),
        color: '#5C95E3',
        fontWeight: 'bold',
    },
    f: {
        fontSize: vh(3.5),
        color: '#fff',
        fontWeight: 'bold'
    }
})


