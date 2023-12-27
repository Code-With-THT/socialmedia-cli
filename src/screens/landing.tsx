import auth from '@react-native-firebase/auth';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

import {useAppDispatch} from '../store';
import {signOutUserThunk, takeUserToAppThunk} from '../store/thunks/user-thunk';
import {useNavigation} from '@react-navigation/native';
import {
  ROOT_ROUTES,
  RootStackNavigationProp,
} from '../navigation/RootNavigatorTypes';

const Landing = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<RootStackNavigationProp>();

  const goToSignUp = () => {
    navigation.navigate(ROOT_ROUTES.SIGN_UP);
  };

  const goToApp = () => {
    navigation.navigate(ROOT_ROUTES.HOME);
  };

  useEffect(() => {
    if (auth().currentUser?.email) {
      dispatch(
        takeUserToAppThunk({
          email: auth().currentUser?.email || '',
          onSuccess: goToApp,
          onError: goToSignUp,
        }),
      );
    } else {
      dispatch(signOutUserThunk());
      goToSignUp();
    }
  }, []);

  return (
    <View>
      <Text>Root</Text>
    </View>
  );
};

export default Landing;
