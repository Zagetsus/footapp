import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import Home from '../pages/Home';
import Team from '../pages/Team';
import Standings from '../pages/Standings';

const Stack = createNativeStackNavigator();
const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home">
        <Stack.Screen name={'Home'} component={Home} />
        <Stack.Screen name={'Standings'} component={Standings} />
        <Stack.Screen name={'Team'} component={Team} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
