import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'
//styles:
import { StyleSheet } from 'react-native'
import { vh, vw } from 'react-native-expo-viewport-units'
import getFontName from './fontGetName'

// import pageStyles from './FilterButtonStyle'
import * as Font from 'expo-font';

/* props:
text = the text that appears on the button
onPress = a function that is called when the button is pressed
changeBackground = boolean. when true background color is light blue (when false background is transparent) */
const FilterButton = (props) => {

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
        <TouchableOpacity style={[Styles.touchable, props.changeBackground && Styles.changeBackground]} onPress={props.onPress}>
            <Text style={[Styles.text, loaded && Styles.font]}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export default FilterButton;



const Styles = StyleSheet.create({
    touchable: {
        borderColor: "#5C95E3",
        alignSelf: "center",
        borderWidth: 1,
        borderRadius: 38,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: vw(4),
        paddingVertical: vh(1)
    },
    changeBackground: {
        backgroundColor: "#DDEAFF"
    },
    text: {
        alignSelf: 'center',
        color: "#001925",
        fontSize: vh(1.7),
    },
    font: {
        fontFamily: getFontName('rubik-regular'),
    }
})

// export default Styles