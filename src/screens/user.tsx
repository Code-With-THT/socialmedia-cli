import {StyleSheet, View, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Header} from '../components/Header';
import {Posts} from '../components/user/Posts';
import {UserInfo} from '../components/user/UserInfo';
import {ROUTES} from '../routes';
import {useAppSelector} from '../store';

const MESSAGE_URL = Image.resolveAssetSource(
  require('../assets/message.png'),
).uri;

const UserDetailPage = () => {
  const currentUser = useAppSelector(state => state.currentUser);

  const goBack = () => {

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
          onPress: () => router.push(ROUTES.MESSAGE_THREAD),
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
