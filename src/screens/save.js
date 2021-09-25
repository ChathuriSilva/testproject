/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, TextInput, Image, Button, Text } from 'react-native';
import firebaseStorage from '@react-native-firebase/storage';
import firebaseStore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
// require("firebase/firestore");
// require("firebase/firebase-storage");


const Save = ({ route, navigation }) => {

    const [img, setImg] = useState(null);

        useEffect(() => {
            setData();
        })

    // const image = route.image;
    // const { myImage } = route.params;


    const setData = () => {
        const { myImage } = route.params;
        console.log("dsfasf = "+myImage);
        setImg(myImage);
    }

    const [caption, setCaption] = useState("")

    const uploadImage = async () => {
        const uri = img;
        console.log(uri);
        const childPath = `post/${auth().currentUser.uid}/${Math.random().toString(36)}`;
        console.log(childPath);
        const response = await fetch(uri);
        const blob = await response.blob();
      

        const task = firebaseStorage()
            .ref()
            .child(childPath)
            .put(blob);

        const taskProgress = snapshot => {
            console.log("1")
            console.log(`transferred: ${snapshot.bytesTransferred}`)
        }

        const taskCompleted = () => {
            task.snapshot.ref.getDownloadURL().then((snapshot) => {
                savePostData(snapshot);
                console.log("2")
                console.log(snapshot)
            })
        }

        const taskError = snapshot => {
            console.log("3")
            console.log(snapshot)
        }

        task.on("state_changed", taskProgress, taskError, taskCompleted);
    }

    const savePostData = (downloadURL) => {

        firebaseStore()
            .collection('posts')
            .doc(auth().currentUser.uid)
            .collection("userPosts")
            .add({
                downloadURL,
                caption,
                likesCount: 0,
                creation: "2021/02/01",
            }).then((function () {
                
            })).catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                });
    }

 return (
    <View style={{ flex: 1 }}>
            <Image source={{ uri:img }} />
            <TextInput
                placeholder="Write a Caption . . ."
                onChangeText={(caption) => setCaption(caption)}
            />

            <Button title="Save" onPress={() => uploadImage()} />
        </View>
 );
};


export default Save;
