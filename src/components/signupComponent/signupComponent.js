/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, TextInput} from 'react-native';
import { Card } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const SignUpComponent = ({ navigation }) =>{

 return (
    <Card style={styles.card}>
    <Card.Content>

        <TouchableHighlight onPress={()=>{}} underlayColor="#fff">
            <View style={styles.btn}>
                <View style={{flexDirection : 'row' , marginLeft: 10 , justifyContent: 'space-around'}}>
                    <FontAwesome name="facebook"  size={22} color={'white'}/>
                    <Text style={styles.txt}>Continue With Facebook</Text>
                </View>
            </View>
        </TouchableHighlight>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{marginTop: 60, flex: 1, height: 1, backgroundColor: '#8f8f8f'}} />
        <View>
        <Text style={styles.txtOR}>OR</Text>
        </View>
        <View style={{marginTop: 60, flex: 1, height: 1, backgroundColor: '#8f8f8f'}} />
        </View>

        <Text style={styles.txtForgotPassword} onPress={() => navigation.navigate('WithEmailOrPassword')}> Sign Up with Email Address or Phone Number</Text>
        <Text style={styles.txtNoAcc}>Already have an account? <Text style={styles.txtSignUp} onPress={() => navigation.navigate('Auth')}>Log in.</Text></Text>
    </Card.Content>
  </Card>
 );
};

const styles = StyleSheet.create({
    container :{
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    },
    img : {
        width : '50%',
        height : '10%',
        resizeMode: 'cover',
    },
    btn : {
        height: 40,
        backgroundColor : '#3797F0',
        padding : 10,
        borderRadius: 5,
        marginTop: 10,
    },
    card : {
        height: '30%',
        width: '80%',
        borderRadius: 0,
        borderWidth: 0, 
        borderColor: 'transparent',
        elevation: 0,
    },
    txt : {
        marginLeft : 10,
        fontWeight : 'bold',
        letterSpacing : 1,
        color  : '#fff',
    },
    txtForgotPassword : {
        textAlign: 'center',
        fontWeight : 'bold',
        fontSize: 10,
        letterSpacing : 1,
        color  : '#3797F0',
        marginTop: 20,
        marginBottom: 80,
    },
    txtLogin : {
        fontWeight : 'bold',
        letterSpacing : 1,
        color  : '#fff',
    },
    txtNoAcc :{
        textAlign: 'center',
        letterSpacing : 1,
        color  : '#828282',
        marginTop: 50,
    },
    txtSignUp : {
        color  : '#363636',
        fontWeight : 'bold',
    },
    txtOR : {
        marginTop: 60,
        color  : '#8f8f8f',
        width: 50, 
        textAlign: 'center',
    },
    
});

export default SignUpComponent;
