import React, {StyleSheet, View, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Header} from '../components/Header';
import {Posts} from '../components/user/Posts';
import {UserInfo} from '../components/user/UserInfo';
import {useAppSelector} from '../store';
import {useNavigation} from '@react-navigation/native';
import {
  ROOT_ROUTES,
  RootStackNavigationProp,
} from '../navigation/RootNavigatorTypes';

const MESSAGE_URL = Image.resolveAssetSource(
  require('../../assets/message.png'),
).uri;

const UserDetailPage = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const currentUser = useAppSelector(state => state.currentUser);

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeAreaView} edges={['top']}>
      <Header
        leftButton={{onPress: goBack}}
        showLogo
        rightButton={{
          child: (
            <Image source={{uri: MESSAGE_URL}} style={styles.messageIcon} />
          ),
          onPress: () => navigation.navigate(ROOT_ROUTES.MESSAGE_THREAD),
        }}
      />

      <View style={styles.main}>
        {/* User Info */}
        <UserInfo user={currentUser} />

        <Posts isActive />
      </View>
    </SafeAreaView>
  );
};

export default UserDetailPage;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  main: {
    paddingTop: 5,
  },
  messageIcon: {
    width: 20,
    height: 20,
  },
});
