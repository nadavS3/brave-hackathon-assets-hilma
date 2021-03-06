import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units'
import SVGImage from './SVGImage';

//style
import styles from './YellowButtonStyle'
import * as Font from 'expo-font';

//icons
import yellowButton from './assets/icons/yellowButton.svg'
import arrowButton from './assets/icons/arrowButton.svg'


const YellowBlueButton = (props) => {

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
        <View style={styles.yellowView}>
            <SVGImage source={yellowButton} width={vw(100)} height={vh(9.82)} />
            <TouchableOpacity style={styles.arrowButton} /* onPress={} */>
                <SVGImage source={arrowButton} width={vw(3)} height={vh(3)} />
            </TouchableOpacity>
            <Text style={[styles.text, loaded && styles.font]}>{props.text}</Text>
        </View>
    )
}

export default YellowBlueButton;

