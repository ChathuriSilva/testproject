/* eslint-disable prettier/prettier */
import React from 'react';

import { View, StyleSheet, Image, TouchableHighlight, Text } from 'react-native';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';

import logo from '../assets/1200px-Instagram_logo.svg.png';
import LoginComponent from '../components/loginComponent/loginComponent';
import SignUpComponent from '../components/signupComponent/signupComponent';

const SignUp = ({navigation}) =>{
 return (
    <View style={styles.container}>
        <Image style={styles.img} source={logo}/>

        {/* <TouchableHighlight onPress={()=>{}}>
            <View style={styles.btn}>
                <View style={{flexDirection : 'row' , marginLeft: 10 , justifyContent: 'space-around'}}>
                    <FontAwesome name="facebook"  size={22} color={'white'}/>
                    <Text style={styles.txt}>Continue With Face Book</Text>
                </View>
            </View>
        </TouchableHighlight> */}
        {/* <LoginComponent navigation={navigation} /> */}
        <SignUpComponent navigation={navigation} />
    </View>
 );
};


export default SignUp;

const styles = StyleSheet.create({
    container :{
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor: '#fff',
    },
    img : {
        width : '50%',
        height : '10%',
        resizeMode: 'cover',
        marginBottom: 40,
    },
    btn : {
        width: 300,
        height: 40,
        backgroundColor : '#3797F0',
        padding : 10,
        borderRadius: 5,
    },
});
