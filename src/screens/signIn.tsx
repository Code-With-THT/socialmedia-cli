import React, {useState} from 'react';
import {StyleSheet, View, Text, Alert, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {AppInput} from '../components/AppInput';
import {ButtonText} from '../components/ButtonText';
import {ContinueButton} from '../components/ContinueButton';
import {Header} from '../components/Header';
import {InputLabel} from '../components/InputLabel';
import {Spacing} from '../components/Spacing';
import {ROUTES} from '../routes';
import {useAppDispatch, useAppSelector} from '../store';
import {UserActions} from '../store/features/user';
import {signInThunk} from '../store/thunks/user-thunk';

const SignIn = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.user);

  const [password, setPassword] = useState('');

  const createAccount = () => {
    const onSuccess = () => {};

    const onError = () =>
      Alert.alert('Could not create account', 'Please try again');

    dispatch(signInThunk({password, onSuccess, onError}));
  };

  return (
    <SafeAreaView edges={['top']}>
      <Header showLogo />

      <View style={styles.main}>
        <Text style={styles.heading}>Welcome to Social Media App</Text>
      </View>

      <Spacing vertical={5} />

      <View style={styles.elementContainer}>
        <InputLabel text="Email" />
        <AppInput
          value={user.email}
          onChangeText={text => dispatch(UserActions.setEmail(text))}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      <Spacing vertical={5} />

      <View style={styles.elementContainer}>
        <InputLabel text="Password" />
        <AppInput
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />
      </View>

      <Spacing vertical={10} />

      <View style={styles.elementContainer}>
        <ContinueButton
          child={<ButtonText text="Sign In" />}
          onPress={createAccount}
        />
      </View>

      <Spacing vertical={10} />

      <TouchableOpacity
        style={styles.elementContainer}
        onPress={() => router.push(ROUTES.SIGN_UP)}>
        <Text style={styles.goToSignInText}>Don't have an account?</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  main: {},
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    alignSelf: 'center',
    marginTop: 10,
  },
  elementContainer: {
    width: '80%',
    alignSelf: 'center',
  },
  goToSignInText: {
    alignSelf: 'center',
  },
});
