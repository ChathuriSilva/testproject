/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableHighlight, TextInput} from 'react-native';
import { Card } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';


const EmailSignUpComponent = ({ navigation }) =>{

    const [text, setText] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChangeText = text => setText(text);

    const onSignUp = () => {
        console.log(email);
        console.log(password);
        auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                firestore().collection("users")
                    .doc(auth().currentUser.uid)
                    .set({
                        username,
                        email,
                        password
                    })
                console.log(result)
                console.log("successfully saved")
            })
            .catch((error) => {
                console.log(error)
                console.log("error when saved")
            })
    }


 return (
     <View>
        <TextInput style={styles.txtInput} onChangeText={(text) => {setUsername(text)}} placeholder="Username"/>
        <TextInput style={styles.txtInput} onChangeText={(text) => {setEmail(text)}}  placeholder="Email"/>
        <TextInput style={styles.txtInput} onChangeText={(text) => {setPassword(text)}} secureTextEntry={true} placeholder="Password"/>
        <TouchableHighlight  onPress={() => navigation.navigate('Auth')} underlayColor="#fff">
                <View style={styles.btnNext}>
                    <View style={{flexDirection : 'row' , justifyContent: 'center'}}>
                        <Text style={styles.txtNext} onPress={() => onSignUp()} >Sign Up</Text>
                    </View>
                </View>
        </TouchableHighlight>
     </View>
    // <Card style={styles.card}>
    //         <Card.Actions style={{flexDirection : 'column' }}>
                // <TextInput style={styles.txtInput} onChangeText={(text) => {setUsername(text)}} placeholder="Username"/>
                // <TextInput style={styles.txtInput} onChangeText={(text) => {setEmail(text)}}  placeholder="Email"/>
                // {/* <TextInput style={styles.txtInput} onChangeText={(text) => {setPassword(text)}} secureTextEntry={true} placeholder="Password"/>
                // <TouchableHighlight  onPress={() => navigation.navigate('Auth')} underlayColor="#fff">
                // <View style={styles.btnNext}>
                //     <View style={{flexDirection : 'row' , justifyContent: 'center'}}>
                //         <Text style={styles.txtNext} onPress={() => onSignUp()} >Sign Up</Text>
                //     </View>
                // </View>
                // </TouchableHighlight> */}
                
    //         </Card.Actions>
    //     </Card>
 );
};

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
        borderWidth: 0.7,
        height: 40,
        marginTop: 15,
        paddingLeft: 10,
        width: 280,
        borderColor: '#bfbfbf',
    },
    card : {
        height: '30%',
        width: '95%',
        borderRadius: 0,
        borderWidth: 0, 
        borderColor: 'transparent',
        elevation: 0,
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
    
});

export default EmailSignUpComponent;
