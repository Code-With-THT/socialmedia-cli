import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROOT_ROUTES, RootStackParamList} from './RootNavigatorTypes';
import Home from '../screens/home';
import {NavigationContainer} from '@react-navigation/native';
import Landing from '../screens/landing';
import SignUp from '../screens/signUp';
import SignIn from '../screens/signIn';
import MyProfile from '../screens/myProfile';
import MessagesList from '../screens/messages';
import PostDetailPage from '../screens/post';
import UserDetailPage from '../screens/user';
import MessageThread from '../screens/messageThread';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name={ROOT_ROUTES.LANDING} component={Landing} />
        <RootStack.Screen name={ROOT_ROUTES.HOME} component={Home} />
        <RootStack.Screen name={ROOT_ROUTES.SIGN_UP} component={SignUp} />
        <RootStack.Screen name={ROOT_ROUTES.SIGN_IN} component={SignIn} />
        <RootStack.Screen name={ROOT_ROUTES.MY_PROFILE} component={MyProfile} />
        <RootStack.Screen
          name={ROOT_ROUTES.MESSAGES}
          component={MessagesList}
        />
        <RootStack.Screen
          name={ROOT_ROUTES.POST_DETAIL_PAGE}
          component={PostDetailPage}
        />
        <RootStack.Screen
          name={ROOT_ROUTES.USER_DETAIL_PAGE}
          component={UserDetailPage}
        />
        <RootStack.Screen
          name={ROOT_ROUTES.MESSAGE_THREAD}
          component={MessageThread}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
