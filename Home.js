import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import React from 'react';

const Home = ({ navigation }) => {
  const { width, height } = Dimensions.get('window');
  const data = [
    {
      id: '1',
      image:
        'https://images.pexels.com/photos/2462023/pexels-photo-2462023.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: '2',
      image:
        'https://images.pexels.com/photos/9277865/pexels-photo-9277865.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: '3',
      image:
        'https://images.pexels.com/photos/9904374/pexels-photo-9904374.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];
  return (
    <ScrollView>
      <View style={{ flex: 1, alignSelf: 'center' }}>
        {data.map((item) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('About', { item })}
              style={{
                marginVertical: 5,
                backgroundColor: 'orange',
                padding: 10,
              }}
              key={item.id}
              activeOpacity={1}
            >
              <SharedElement id={`item.${item.image}.image`}>
                <Image
                  source={{ uri: item.image }}
                  style={{ width: width - 20, height: height / 3,resizeMode:'cover'}}
                />
              </SharedElement>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Home;
