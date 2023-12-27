import React, {useMemo} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Header} from '../components/Header';
import {useAppDispatch, useAppSelector} from '../store';
import {CurrentUserActions} from '../store/features/currentUser';
import {useNavigation} from '@react-navigation/native';
import {
  ROOT_ROUTES,
  RootStackNavigationProp,
} from '../navigation/RootNavigatorTypes';

const PostDetailPage = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<RootStackNavigationProp>();

  const currentPost = useAppSelector(state => state.currentPost);
  const users = useAppSelector(state => state.users);

  const currentUser = useMemo(
    () => users[currentPost.user],
    [users, currentPost.user],
  );

  const goBack = () => {
    navigation.goBack();
  };

  const goToUserDetailPage = () => {
    dispatch(CurrentUserActions.setCurrentUser(currentUser));
    navigation.navigate(ROOT_ROUTES.USER_DETAIL_PAGE);
  };

  return (
    <SafeAreaView style={styles.safeAreaView} edges={['top']}>
      <Header
        leftButton={{
          onPress: goBack,
        }}
        showLogo
      />

      <View style={styles.main}>
        <TouchableOpacity onPress={goToUserDetailPage}>
          <Text>{currentUser?.name}</Text>
        </TouchableOpacity>

        <Text>{currentPost.text}</Text>
      </View>
    </SafeAreaView>
  );
};

export default PostDetailPage;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  main: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
});
