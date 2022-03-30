import React from 'react';
import {Platform} from  'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import EnterScreen from './screens/EnterScreen';
import GameScreen from './screens/GameScreen';

import { Colors } from './constatns/Color';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="EnterScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.blue : ''
          },
          headerTintColor: Platform.OS === 'android' ? 'white' : Colors.blue,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center'
        }}>
        <Stack.Screen name="EnterScreen" component={EnterScreen} options={ {title: 'Tic-tac-toe'}}/>
        <Stack.Screen name="GameScreen" component={GameScreen} options={{title:''}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
