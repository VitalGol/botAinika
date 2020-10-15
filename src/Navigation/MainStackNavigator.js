import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import CameraFullView from '../screens/CameraFullView';
import CameraFullView1 from '../screens/CameraFullView1';
import CameraFullView2 from '../screens/CameraFullView2';
import CameraPicFlowers from '../screens/CameraPicFlowers';
import CameraPicFlowers1 from '../screens/CameraPicFlowers1';
import CameraPicFlowers2 from '../screens/CameraPicFlowers2';
import CameraPicLeaves from '../screens/CameraPicLeaves';
import CameraPicLeaves1 from '../screens/CameraPicLeaves1';
import CameraPicLeaves2 from '../screens/CameraPicLeaves2';
import Report from '../screens/Report';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Start" component={HomeScreen} />
      <Stack.Screen name="CameraFullView" component={CameraFullView} />
      <Stack.Screen name="CameraFullView1" component={CameraFullView1} />
      <Stack.Screen name="CameraFullView2" component={CameraFullView2} />
      <Stack.Screen name="CameraPicFlowers" component={CameraPicFlowers} />
      <Stack.Screen name="CameraPicFlowers1" component={CameraPicFlowers1} />
      <Stack.Screen name="CameraPicFlowers2" component={CameraPicFlowers2} />
      <Stack.Screen name="CameraPicLeaves" component={CameraPicLeaves} />
      <Stack.Screen name="CameraPicLeaves1" component={CameraPicLeaves1} />
      <Stack.Screen name="CameraPicLeaves2" component={CameraPicLeaves2} />
      <Stack.Screen name="Report" component={Report} />
    </Stack.Navigator>
  );
}

export default function MainStackNavigator() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
