import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FacebookButton from './faceBookButton'
import GoogleButton from './googleButton'
import LoginButton from './loginButton'
import CheckButton from './checkButton'
import FilterButton from "./FilterButton";
import LargeBlueButton from "./LargeBlueButton";
import ss from './assets/icons/blacklike.svg'
import Location from './location'
import MediumBlueButton from "./MediumBlueButton";
import SmallBlueButton from "./SmallBlueButton";
import YellowButton from "./YellowButton";

export default function App() {
  return (
    <View style={styles.container}>
       {/* <YellowButton text="שלום לכולם" /> */}
       {/* <LargeBlueButton text="הרשם" /> */}
       {/* <FilterButton text="בוקר" onPress={()=>{}} changeBackground={true} /> */}
      {/* <FilterButton text="צהריים " onPress={()=>{}} changeBackground={true} /> */}
       {/* <SmallBlueButton text='יציאה ' /> */}
       {/* <MediumBlueButton text='tk ,rao ' /> */}
      {/* <FacebookButton /> */}
      {/* <GoogleButton /> */}
      {/* <LoginButton /> */}
      {/* <CheckButton text={"מהבית"} svgSource={ss} hasCheck={true} /> */}
      {/* <Location text={"gzrv nvch,"} image={require('./assets/pic.jpg')} date={"רביעי 12.3"} numberOfMeters={300} number={230} numberOfMinutes={30} /> */}
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


//todo: ask lipaz about osition absolut