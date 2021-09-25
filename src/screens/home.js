/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Profile from '../components/homeComponents/profileComponent/profileComponent';
import Search from '../components/homeComponents/searchComponent/searchComponent';
import Dashboard from '../components/homeComponents/dashboardComponent/dashboardComponent';
import Post from '../components/homeComponents/postComponent/postComponent';

import firebaseStorage from '@react-native-firebase/storage';
import firebaseStore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

//  <LoginComponent navigation={navigation} />
// renderScene = ({ route, jumpTo }) => {

const HomeRoute = Dashboard;

const SearchRoute = Search;

const AddPostRoute = Post;

const ShopRoute = () => <Text>shop</Text>;

const ProfileRoute = Profile;

const Home = ({navigation}) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    
    { key: 'home',  color: '#fff', icon: props => <FontAwesome name="home" size={22} color={'black'}/> },
    { key: 'search', color: '#fff',  icon: props => <FontAwesome name="search"  size={22} color={'black'}/> },
    { key: 'addPost', color: '#fff', icon: props => <FontAwesome name="plus-square"  size={22} color={'black'}/> },
    { key: 'shop', color: '#fff', icon: props => <FontAwesome name="shopping-bag"  size={22} color={'black'}/> },
    { key: 'profile', color: '#fff', icon: props => <FontAwesome name="user-circle"  size={22} color={'black'}/> },
  ]);

//   const [posts, setPosts] = useState([]);

//   const data = [] ;

//   const fetchPosts = () => {
//     firebaseStore().collection('posts')
//     .doc(auth().currentUser.uid)
//     .collection("userPosts").get()
//     .then(querySnapshot => {
//       querySnapshot.docs.map(doc => {
//         console.log('LOG 1', doc.data());
//        data.push(doc.data());
//       });
//     }).catch(function(error) {
//       console.log('error: ' + error.message);
//       });
// }


  const renderScene = ({ route }) => {
    console.log("===========================")
    //fetchPosts();
    switch (route.key) {
      case 'home':
        // console.log("//////////////////////////")
        // console.log(data);
        return <HomeRoute navigation={navigation}  />;
      case 'addPost':
        return <AddPostRoute navigation={navigation} />;
      case 'search':
        return <SearchRoute navigation={navigation} />;
      case 'shop':
        return <Text>shop</Text>;
      case 'profile':
        return <ProfileRoute navigation={navigation} />;
    }
  }

  return (
    <BottomNavigation
      navigation={navigation}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Home;