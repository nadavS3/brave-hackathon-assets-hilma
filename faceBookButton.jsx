import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
//style
import { vh, vw } from 'react-native-expo-viewport-units'
import * as Font from 'expo-font'
import getFontName from './fontGetName'
//icons
import SVGImage from './SVGImage'
import facebook from './assets/icons/facebook.svg'
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
            <View style={styles.textContainer}>
                <Text style={[styles.text, loaded && styles.rubicFont]}>התחבר עם פייסבוק</Text>
                <SVGImage source={facebook} width={styles.f.width} height={styles.f.height} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    rubicFont: {
        fontFamily: getFontName('rubik-bold'),
    },
    touchable: {
        backgroundColor: '#3B5998',
        height: vh(7.5),
        width: vw(89.5),
        borderRadius: vh(7.5 / 2),
        alignItems: 'center',
        justifyContent: 'center'
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: vh(2.5),
        color: '#fff',
        fontWeight: 'bold',
        marginRight: vw(3)
    },
    f: {
        height: vh(3),
        width: vh(3)
    }
})


