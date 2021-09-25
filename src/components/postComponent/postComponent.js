/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Image, Text, TouchableHighlight, TextInput} from 'react-native';
import { Card } from 'react-native-paper';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - 200;

const PostComponent = ({ navigation }) =>{


 return (
    <Card style={styles.card}>
    <Card.Content>
    <View>
        <View style={{ flexDirection:"row", alignItems: 'center'}}>
            <TouchableHighlight style={[styles.profileImgContainer, { borderColor: '#c90083', borderWidth:2 }]}>
            <Image source={{ uri:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photo%2Fsay-cheese-close-up-young-beautiful-dark-skinned-man-with-afro-hairstyle-casual-white-t-shirt-red-shirt-smiling-with-teeth-holding-smartphone-making-selfie-photo_8919408.htm&psig=AOvVaw1jKojjTenLrnPfjYPyIA78&ust=1632410619409000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOC3wMzxkvMCFQAAAAAdAAAAABAJ" }} style={styles.profileImg} />
            </TouchableHighlight>
            <Text style={{marginLeft: 10}}>mypost</Text>
        </View>
    </View>
    <View>
    <Text style={{marginLeft: 10}}>mypost</Text>
    </View>
    </Card.Content>
  </Card>
     
 );
};

const styles = StyleSheet.create({
    profileImgContainer: {
        marginLeft: 8,
        height: 40,
        width: 40,
        borderRadius: 40,
      },
      profileImg: {
        height: 40,
        width: 40,
        borderRadius: 40,
      },
      card : {
         height: windowHeight ,
         width: windowWidth,
        // borderRadius: 0,
        // borderWidth: 0, 
        // borderColor: 'transparent',
        // elevation: 0,
    },
});

export default PostComponent;
