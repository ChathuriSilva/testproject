/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Image, Text, TouchableHighlight, TextInput} from 'react-native';

const StoryComponent = ({ navigation }) =>{

 return (
     <View>
        <TouchableHighlight style={[styles.profileImgContainer, { borderColor: '#c90083', borderWidth:2 }]}>
        <Image source={{ uri:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photo%2Fsay-cheese-close-up-young-beautiful-dark-skinned-man-with-afro-hairstyle-casual-white-t-shirt-red-shirt-smiling-with-teeth-holding-smartphone-making-selfie-photo_8919408.htm&psig=AOvVaw1jKojjTenLrnPfjYPyIA78&ust=1632410619409000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOC3wMzxkvMCFQAAAAAdAAAAABAJ" }} style={styles.profileImg} />
        </TouchableHighlight>
        <Text style={{marginLeft: 34, marginTop: 3}}>story</Text>
    </View>
 );
};

const styles = StyleSheet.create({
    profileImgContainer: {
        marginLeft: 8,
        height: 80,
        width: 80,
        borderRadius: 40,
      },
      profileImg: {
        height: 80,
        width: 80,
        borderRadius: 40,
      },
});

export default StoryComponent;
