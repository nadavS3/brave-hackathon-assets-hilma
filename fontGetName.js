import { Platform } from 'react-native';

const getFontName = (name) => {
    if (Platform.OS !== 'ios') {
        let i = name.indexOf("-");
        let letter = name[i + 1];
        let upperCaseLettter = letter.toUpperCase()
        let A = name.replace(`-${letter}`, upperCaseLettter)
        return A
    } else {
        return name
    }
}
export default getFontName;

//How to use it?
// 1.css file -> import this file 
// 2. css => textBold: {fontFamily: getFontName('assistant-light')}