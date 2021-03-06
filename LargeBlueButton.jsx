import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

//style
import styles from './LargeBlueButtonStyle'
import * as Font from 'expo-font';

const LargeBlueButton = (props) => {

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
                <Text style={[styles.text, loaded && styles.font]}> {props.text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LargeBlueButton;

// const TimesButton = (props) => {

//     const [loaded, setLoaded] = useState(false)

//     useEffect(() => {
//         (async () => {
//             await Font.loadAsync({
//                 'rubic': require('../../assets/fonts/Rubik-VariableFont_wght.ttf'),
//             })
//             setLoaded(true)
//         })()
//     }, [])

//     return (
//         <TouchableOpacity style={[pageStyles.touchable, props.changeBackground && pageStyles.changeBackground]}>
//             <Text style={[pageStyles.text, loaded && pageStyles.font]}>{props.text}</Text>
//         </TouchableOpacity>
//     )
// }

// export default TimesButton;