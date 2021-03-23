import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Platform } from 'react-native';
import { vh, vw } from 'react-native-expo-viewport-units';
// import styles from './fonts';
import * as Font from 'expo-font';
import getFontName from './fontGetName';

export default function UserDetails(props) {
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
    if (loaded) {
        return (
            <>
                <View style={{...styles.container, backgroundColor: props.color ? props.color : '#fcfccc'}}>
                    <Image source={props.profilImage} style={styles.personImage} />
                    <Text style={styles.text}>{props.name} </Text>
                    <View style={styles.details}>
                        <View>
                            <Text style={styles.data}>{props.heroism}</Text>
                            <Text style={styles.mainText}>גבורות</Text>
                        </View>
                        <View style={styles.border}></View>
                        <View>
                            <Text style={styles.data}>{props.nextTag}%</Text>
                            <Text style={styles.mainText}>לתג הבא</Text>
                        </View>
                        <View style={styles.border}></View>
                        <View>
                            <Text style={styles.data}>{props.volunteerHours}</Text>
                            <Text style={styles.mainText}>שעות התנדבות</Text>
                        </View>
                    </View>
                </View>
                {/* <View style={styles.shadow}></View> */}
            </>
        )
    } else {
        return <Text>hii</Text>
    }
}

const styles = StyleSheet.create({
    container: {
        zIndex: 10,
        flex: 3/7,
        flexDirection: 'column',
        // borderBottom: 90,
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
        top: 0,
        alignItems: 'center',
        // borderBottomColor: '#dedddc',
        borderWidth: vw(0.2),
        // borderLeftColor: '#dedddc',
        // borderRightColor: '#dedddc',
        borderColor: '#dedddc',
        // borderRadius: 100,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: vw(100), height: vh(10) },
        shadowOpacity: 0.8,
        shadowRadius: 100,
        elevation: 29,
    },
    personImage: {
        width: vw(23),
        height: vw(23),
        top: vh(6),
        marginBottom: vh(6),
        borderRadius: 100
    },
    text: {
        top: vh(2),
        fontSize: vw(7),
        color: 'black',
        marginBottom: vh(4),
        fontFamily: getFontName('rubik-bold'),
    },
    details: {
        width: '100%',
        top: vh(2),
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end'
    },
    mainText: {
        fontSize: vw(3.5),
        color: '#ababab',
        textAlign: 'center',
    },
    data: {
        fontSize: vw(6),
        color: 'black',
        textAlign: 'center',
        fontFamily: getFontName('rubik-bold'),
    },
    border: {
        width: vw(0.3),
        height: vh(7),
        backgroundColor: '#9c9b9a'
    },
});
