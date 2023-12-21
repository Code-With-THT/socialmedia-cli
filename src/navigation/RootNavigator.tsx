import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROOT_ROUTES, RootStackParamList} from './RootNavigatorTypes';
import Home from '../screens/home';
import {NavigationContainer} from '@react-navigation/native';
import Landing from '../screens/landing';
import SignUp from '../screens/signUp';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name={ROOT_ROUTES.LANDING} component={Landing} />
        <RootStack.Screen name={ROOT_ROUTES.HOME} component={Home} />
        <RootStack.Screen name={ROOT_ROUTES.SIGN_UP} component={SignUp} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
