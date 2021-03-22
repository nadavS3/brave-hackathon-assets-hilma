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
import UserDetails from './userDetails';
import { vh, vw } from 'react-native-expo-viewport-units';
import profilImage from './assets/Portrait.png';

export default function App() {
  return (
    <View style={styles.container}>
      <UserDetails profilImage={profilImage} name='אדווה אורן' heroism={1399} nextTag={59} volunteerHours={37}/>
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
      {/* <Text>Open up App.js to start working on your app!</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    // width: vw(100),
    // height: vh(100),
    flex: 1,
    // backgroundColor: 'blue',
    // opacity: 0.5,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});


//todo: ask lipaz about osition absolut