import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';

//style
import styles from './SmallBlueButtonStyle'
import * as Font from 'expo-font';

const SmallBlueButton = (props) => {

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
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} /* onPress={} */>
                <Text style={[styles.text, loaded && styles.font]}> {props.text}</Text>
            </TouchableOpacity>
        </View >
    )
}

export default SmallBlueButton;

