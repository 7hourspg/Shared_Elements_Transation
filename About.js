import { View, Text, Image, Dimensions } from 'react-native';
import React from 'react';
import {SharedElement} from 'react-navigation-shared-element'
// import { SharedElement } from 'react-native-shared-element';

const About = ({ route }) => {
  const { item } = route.params;
  const { width, height } = Dimensions.get('window');
  // console.log(item);
  return (
    <View>
      <SharedElement id={`item.${item.image}.image`}>
        <Image source={{ uri: item.image }} style={{ width, height ,resizeMode:'cover'}} />
      </SharedElement>
    </View>
  );
};

About.sharedElements = (route) => {
  const { item } = route.params;
  return [
    {
      id: `item.${item.image}.image`,
      animation: 'move',
      // resize: 'clip', 
      // align: 'left-top' 
    },
    // {
    //   id: `item.${item.avatar}.avatar`,
    //   animation: 'move',
    //   resize: 'clip',
    // }
  ]
}


export default About;
