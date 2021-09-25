/* eslint-disable prettier/prettier */
import React, {useState} from 'react';

import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';

import PhoneSignUpComponent from '../components/phoneSignUpComponent/phoneSignUpComponent';
import EmailSignUpComponent from '../components/emailSignUpComponent/emailSignUpComponent';

const WithEmailOrPassword = ({navigation}) =>{

      const [shouldShow, setShouldShow] = useState(true);

 return (
    <View style={styles.container}>

        <View style={{ flexDirection:"row", marginTop: 170}}>
            <View >
            <TouchableHighlight onPress={()=> setShouldShow(true)}>
                <View style={styles.btn}>
                    <View style={{flexDirection : 'row' , marginLeft: 10 , justifyContent: 'space-around'}}>
                        <Text style={styles.txt}>PHONE</Text>
                    </View>
                </View>
            </TouchableHighlight>
            </View>
            <View >
            <TouchableHighlight onPress={()=>setShouldShow(false)}>
                <View style={styles.btn}>
                    <View style={{flexDirection : 'row' , marginLeft: 10 , justifyContent: 'space-around'}}>
                        <Text style={styles.txt}>EMAIL</Text>
                    </View>
                </View>
            </TouchableHighlight>
            </View>
        </View>

        <View>
            { shouldShow ? (
                <PhoneSignUpComponent navigation={navigation} />
                ) : ( <EmailSignUpComponent navigation={navigation} /> ) }
        </View>
        <Text style={styles.txtNoAcc}>Already have an account? <Text style={styles.txtSignUp} onPress={() => navigation.navigate('Auth')}>Log in.</Text></Text>
    </View>
 );
};


export default WithEmailOrPassword;

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
        width: 150,
        height: 40,
        backgroundColor : '#fff',
        padding : 10,
        borderBottomColor: '#bfbfbf',
        borderBottomWidth: 1,
    },
    txt : {
        color: '#b5b5b5',
    },
    btnphn : {
        marginTop: 15,
        width: 90,
        height: 40,
        backgroundColor : '#fff',
        paddingTop : 10,
        borderColor: '#bfbfbf',
        borderBottomWidth: 0.7,
        borderTopWidth: 0.7,
        borderLeftWidth: 0.7,
        borderRightWidth: 0.4,
    },
    txtInput : {
        borderBottomWidth: 0.7,
        borderTopWidth: 0.7,
        borderRightWidth: 0.7,
        height: 40,
        marginTop: 15,
        width: 190,
        borderColor: '#bfbfbf',
    },
    card : {
        height: '30%',
        width: '85%',
        borderRadius: 0,
        borderWidth: 0, 
        borderColor: 'transparent',
        elevation: 0,
    },
    txtInstructions :{
        textAlign: 'center',
        color  : '#828282',
        marginTop: 10,
        fontSize: 9,
    },
    btnNext : {
        height: 40,
        backgroundColor : '#3797F0',
        padding : 10,
        borderRadius: 5,
        marginTop: 20,
    },
    txtNext : {
        fontWeight : 'bold',
        letterSpacing : 1,
        color  : '#fff',
    },
    txtNoAcc :{
        textAlign: 'center',
        letterSpacing : 1,
        color  : '#828282',
        marginTop: 150,
    },
    txtSignUp : {
        color  : '#363636',
        fontWeight : 'bold',
    },
});
