/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import * as ImagePicker from 'react-native-image-picker';
import {launchImageLibrary} from 'react-native-image-picker';

import Save from '../../../screens/save';

const Post = ({ navigation }) => {

  const [image, setImage] = useState(null);
  const [type, setType] = useState(RNCamera.Constants.Type.back);
  const [camera, setCamera] = useState(null);

  const [caption, setCaption] = useState("")


  const takePicture = async () => {
    if (camera) {
      // const data = await camera.takePictureAsync(null);
      const options = { quality: 0.5, base64: true };
      const data = await camera.takePictureAsync(options);
      console.log(data.uri);
      setImage(data.uri);
      console.log(image);
    }
  }

  const pickImage = async () => {
      let options = {
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
      ImagePicker.launchImageLibrary(options, (response) => {
        console.log("lllllllllllllllllllllll");
        console.log('Response = ', response.data);
    
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
          alert(response.customButton);
        } else {
          const source = { uri: response.uri };
          console.log(source);
          console.log('response', JSON.stringify(response));
          setImage(response.uri);
        }
      });
    
    }
    
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.cameraContainer}>
        <RNCamera
          ref={ref => setCamera(ref)}
          style={styles.fixedRatio}
          type={type}
          ratio={'1:1'} />
      </View>

      <Button
        title="Flip Image"
        onPress={() => {
          setType(
            type === RNCamera.Constants.Type.back
              ? RNCamera.Constants.Type.front
              : RNCamera.Constants.Type.back
          );
        }}>
      </Button>

     {/* // navigation.navigate('Details', {itemId: 86, myImage: image}); */}

      <Button title="Take Picture" onPress={() => takePicture()} />
      <Button title="Pick Image From Gallery" onPress={() => pickImage()} />
      <Button title="Save" onPress={() => navigation.navigate('Save', {myImage: image}) } />
      {image && <Image source={{ uri: image }} style={{ flex: 1 }} />}
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
    cameraContainer: {
      flex: 1,
      flexDirection: 'row'
    },
    fixedRatio: {
      flex: 1,
      aspectRatio: 1
    }
  
  })