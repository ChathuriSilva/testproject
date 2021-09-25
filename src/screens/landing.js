/* eslint-disable prettier/prettier */
import React,{useEffect} from 'react';

import { StyleSheet, ImageBackground, Animated} from 'react-native';

// import backgroung image
import backgroundImage from '../assets/insta.jpg';


const Landing = ({navigation}) => {

    const switchAuth = () => {
        navigation.navigate('Auth');
     };

     useEffect( () => {
         setTimeout( () => { switchAuth();},1000);
     });


 return (
    <ImageBackground style={styles.backImg} source={backgroundImage} resizeMode="cover" />
 );
};

const styles = StyleSheet.create({
    backImg: {
        width: '100%',
        height: '100%',
    },
});

export default Landing;
