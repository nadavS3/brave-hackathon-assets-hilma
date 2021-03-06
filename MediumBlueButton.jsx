import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

//style
import styles from './MediumBlueButtonStyle'
import * as Font from 'expo-font';

const MediumBlueButton = (props) => {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        (async () => {
            if (Platform.OS === 'ios') {
                await Font.loadAsync({
                    'rubik-regular': require('./assets/fonts/Rubik-Regular.ttf'),
                })
            } else {
                await Font.loadAsync({
                    'rubikRegular': require('./assets/fonts/Rubik-Regular.ttf'),
                })
            }
            setLoaded(true)
        })()
    }, [])

    return (
        <View style={styles.container}> 
            <TouchableOpacity style={{ ...styles.button }} /* onPress={} */>
                <Text style={[styles.text, loaded && styles.font]}> {props.text} </Text>
            </TouchableOpacity>
        </View>
    )
}

export default MediumBlueButton;

