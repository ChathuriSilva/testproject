/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableHighlight, Image } from 'react-native';
import { Avatar, Appbar, Card, Title, Paragraph } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Dimensions } from 'react-native';
import firebaseStorage from '@react-native-firebase/storage';
import firebaseStore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import StoryComponent from '../../storyComponent/storyComponent';

var DATA = [];

const LeftContent = props => <Avatar.Icon size={34} icon="instagram" backgroundColor={"blue"} />

const windowWidth = Dimensions.get('window').width;

const Dashboard = ({navigation}) => {

  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    firebaseStore().collection('posts')
    .doc(auth().currentUser.uid)
    .collection("userPosts").get()
    .then(querySnapshot => {
      querySnapshot.docs.map(doc => {
        console.log('LOG 1', doc.data());
       DATA.push(doc.data());
      });
    }).catch(function(error) {
      console.log('error: ' + error.message);
      });
}
fetchPosts();


  const renderItem = ({ item }) => (
    <Card key={item.id}>
    <Card.Title fontSize={14} title={item.caption} left={LeftContent} />
    <Card.Cover source={{ uri: item.downloadURL }} />
    <Card.Actions>
      <FontAwesome name="heart" style={{marginRight: 15}} size={22} color={'black'}/>
      <FontAwesome name="comment" style={{marginRight: 15}} size={22} color={'black'}/>
      <FontAwesome name="share" style={{marginRight: 15}} size={22} color={'black'}/>
      <FontAwesome name="save" style={{left: 200}} size={22} color={'black'}/>
    </Card.Actions>
    <View style={{marginTop: 20, flex: 1, height: 1, backgroundColor: '#d6d6d6'}} />
  </Card>
  );

  return (

    <View>
       <Appbar style={styles.bottom} >
       <Appbar.Action icon="camera" color={'black'} style={{left:2}} />
       <Text style={{left:90}}>Instagram</Text>
       <Appbar.Action icon="facebook-messenger" style={{left:180}} color={'black'} onPress={() => console.log('Pressed dm')} />
      </Appbar>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={{marginTop: 50}}
      />
    </View>
    
    
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
    bottom: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      backgroundColor:'white',
      borderColor: 'transparent',
      elevation: 0,
    },
    logoTxt: {
      justifyContent: 'center',
    },
    profileImgContainer: {
      marginLeft: 10,
      height: 80,
      width: 80,
      borderRadius: 40,
      marginTop:70,
      marginBottom:0,
    },
    profileImg: {
      height: 80,
      width: 80,
      borderRadius: 40,
    },
});