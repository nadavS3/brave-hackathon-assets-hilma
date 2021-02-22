import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
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
                    'product-sans-bold': require('./assets/fonts/Product-Sans-Bold.ttf'),
                })
            } else {
                await Font.loadAsync({
                    'rubikBold': require('./assets/fonts/Rubik-Bold.ttf'),
                    'productSansBold': require('./assets/fonts/Product-Sans-Bold.ttf'),
                })
            }
            setLoaded(true)
        })()
    }, [])
    return (
        <TouchableOpacity style={styles.touchable} onPress={onPress}>
            <View style={styles.textContainer}>
                <Text style={[styles.text, loaded && styles.rubicFont]}>התחבר עם גוגל</Text>
                <Text style={[styles.f, loaded && styles.googleFont]}>G</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    rubicFont: {
        fontFamily: getFontName('rubik-bold'),
    },
    googleFont: {
        fontFamily: getFontName('product-sans-bold'),
    },
    touchable: {
        backgroundColor: '#DB4437',
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
        fontSize: vh(3.5),
        width: vh(3),
        color: '#fff',
        fontWeight: 'bold'
    }
})


