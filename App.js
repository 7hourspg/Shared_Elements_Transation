import { View, Text, StatusBar } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import Home from './Home';
import About from './About';
const App = () => {
  const Stack = createSharedElementStackNavigator();

  const options = {
    gestureEnabled: true,
    transitionSpec: {
      open: { animation: 'timing', config: { duration: 300 } },
      close: { animation: 'timing', config: { duration: 300 } },
    },
    cardStyleInterpolator: ({ current: { progress } }) => {
      return {
        cardStyle: {
          opacity: progress,
        }
      }
    }
  }
  
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor="green" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="About" component={About} options={options} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
