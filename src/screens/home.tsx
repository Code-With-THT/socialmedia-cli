import auth from '@react-native-firebase/auth';
import React, {useMemo} from 'react';
import {StyleSheet, ScrollView, TouchableOpacity, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {ButtonText} from '../components/ButtonText';
import {Header} from '../components/Header';
import {PostCard} from '../components/PostCard';
import {Spacing} from '../components/Spacing';
import {ROUTES} from '../routes';
import {useAppDispatch, useAppSelector} from '../store';
import {CurrentPostActions} from '../store/features/currentPost';
import {PostBuilderActions} from '../store/features/postBuilder';
import {PRIMARY} from '../utils/colors';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const posts = useAppSelector(state => state.posts);

  const postsToShow = useMemo(() => {
    return Object.values(posts).sort((a, b) => b.createdDate - a.createdDate);
  }, [posts]);

  const createPost = () => {
    dispatch(CurrentPostActions.reset());
    dispatch(PostBuilderActions.setIsPostModalOpen(true));
  };

  const signOut = () => {
    auth().signOut();

    // router.replace(ROUTES.SIGN_UP);
  };

  const goToProfile = () => {
    // router.push(ROUTES.MY_PROFILE)
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Header
        leftButton={{
          child: <Text>Profile</Text>,
          onPress: goToProfile,
        }}
        showLogo
        rightButton={{
          child: <Text>Sign Out</Text>,
          onPress: signOut,
        }}
      />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContentContainer}
        showsVerticalScrollIndicator={false}>
        {postsToShow.map(post => (
          <PostCard post={post} key={post.id} />
        ))}

        <Spacing vertical={100} />
      </ScrollView>

      <TouchableOpacity style={styles.createPostButton} onPress={createPost}>
        <ButtonText text="+" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {},
  scrollViewContentContainer: {
    alignItems: 'center',
  },
  createPostButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
