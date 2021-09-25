/* eslint-disable prettier/prettier */
import React, {useContext, useState} from 'react';
import { StyleSheet, View, Text, TouchableHighlight, TextInput} from 'react-native';
import { Card } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {AuthContext} from '../authProvider';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';


const LoginComponent = ({ navigation }) =>{

    const [text, setText] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    async function onFacebookButtonPress() {
        // Attempt login with permissions
        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
      
        if (result.isCancelled) {
          throw 'User cancelled the login process';
        }
      
        // Once signed in, get the users AccesToken
        const data = await AccessToken.getCurrentAccessToken();
      
        if (!data) {
          throw 'Something went wrong obtaining access token';
        }
      
        // Create a Firebase credential with the AccessToken
        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
      
        // Sign-in the user with the credential
        await auth().signInWithCredential(facebookCredential)
          .then(() => {
              //Once the user creation has happened successfully, we can add the currentUser into firestore
              //with the appropriate details.
              console.log('current User');
            //   firestore().collection('users').doc(auth().currentUser.uid)
            //   .set({
            //       fname: '',
            //       lname: '',
            //       email: auth().currentUser.email,
            //       createdAt: firestore.Timestamp.fromDate(new Date()),
            //       userImg: null,
               })
              //ensure we catch any errors at this stage to advise us if something does go wrong
              .catch(error => {
                console.log('error came');
                  //console.log('Something went wrong with added user to firestore: ', error);
              })
      }


    const fbLogin = useContext(AuthContext);

    const onChangeText = text => setText(text);



    const onSignUp = () => {
        console.log(email);
        console.log(password);
        auth().signInWithEmailAndPassword(email.toString().trim(), password.toString().trim())
            .then((result) => {
                console.log(result)
                console.log("successfull")
                navigation.navigate('Home')
            })
            .catch((error) => {
                console.log(error)
                console.log("not successfull")
           })
    }



 return (
    <Card style={styles.card}>
    <Card.Content>

        <TouchableHighlight onPress={() => onFacebookButtonPress().then(() => console.log('Signed in with Facebook!'))} underlayColor="#fff">
            <View style={styles.btn}>
                <View style={{flexDirection : 'row' , marginLeft: 10 , justifyContent: 'space-around'}}>
                    <FontAwesome name="facebook"  size={22} color={'white'}/>
                    <Text style={styles.txt}>Continue With Facebook</Text>
                </View>
            </View>
        </TouchableHighlight>

        <TouchableHighlight  underlayColor="#fff">
            <View style={styles.btn}>
                <View style={{flexDirection : 'row' , marginLeft: 10 , justifyContent: 'space-around'}}>
                    <FontAwesome name="google"  size={22} color={'white'}/>
                    <Text style={{marginLeft : 10, fontWeight : 'bold', letterSpacing : 1, color  : '#fff',}}>Continue With Google</Text>
                </View>
            </View>
        </TouchableHighlight>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{marginTop: 20, flex: 1, height: 1, backgroundColor: '#8f8f8f'}} />
        <View>
        <Text style={styles.txtOR}>OR</Text>
        </View>
        <View style={{marginTop: 20, flex: 1, height: 1, backgroundColor: '#8f8f8f'}} />
        </View>
        
        <TextInput style={styles.txtInput} onChangeText={(text) => {setEmail(text)}}  placeholder="Phone number, username, or email"/>
        <TextInput style={styles.txtInput} secureTextEntry={true}  onChangeText={(text) => {setPassword(text)}} placeholder="Password"/>

{/* onPress={() => navigation.navigate('Home')} */}

        <TouchableHighlight  underlayColor="#fff" onPress={() => onSignUp()}>
            <View style={styles.btn}>
                <View style={{flexDirection : 'row' , justifyContent: 'center'}}>
                    <Text style={styles.txtLogin} >Login</Text>
                </View>
            </View>
        </TouchableHighlight>

        <TouchableHighlight  underlayColor="#fff" onPress={() => navigation.navigate('SignUp')}>
            <View style={styles.btn}>
                <View style={{flexDirection : 'row' , justifyContent: 'center'}}>
                    <Text style={styles.txtLogin} >signup</Text>
                </View>
            </View>
        </TouchableHighlight>


        <Text style={styles.txtForgotPassword}>Forgot Password?</Text>
        <Text style={styles.txtNoAcc}>Dont have an account? <Text style={styles.txtSignUp} onPress={() => navigation.navigate('SignUp')}>Sign up</Text></Text>
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
    txtInput : {
        height: 40,
        marginTop: 10,
        borderWidth: 0.2,
        borderColor: '#f2eeed',
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 3,
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
        height: '70%',
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
        letterSpacing : 1,
        color  : '#3797F0',
        marginTop: 20,
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
        marginTop: 100,
    },
    txtOR : {
        marginTop: 20,
        color  : '#8f8f8f',
        width: 50, 
        textAlign: 'center',
    },
    txtSignUp : {
        color  : '#363636',
        fontWeight : 'bold',
    }
});

export default LoginComponent;
