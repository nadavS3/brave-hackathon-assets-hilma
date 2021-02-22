import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FacebookButton from './faceBookButton'
import GoogleButton from './googleButton'
import LoginButton from './loginButton'
import CheckButton from './checkButton'
import ss from './assets/icons/blacklike.svg'
import Location from './location'

export default function App() {
  return (
    <View style={styles.container}>
      <FacebookButton />
      <GoogleButton />
      <LoginButton />
      <CheckButton text={"מהבית"} svgSource={ss} hasCheck={true} />
      <Location text={"gzrv nvch,"} image={require('./assets/pic.jpg')} date={"רביעי 12.3"} numberOfMeters={300} number={230} numberOfMinutes={30} />
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
