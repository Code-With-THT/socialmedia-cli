import auth from '@react-native-firebase/auth';

import {getFrienshipsForUserThunk} from './friendships-thunk';
import {getAllPostsThunk} from './posts-thunk';
import {AppThunk} from '..';
import {
  FIREBASE_COLLECTIONS,
  generateFirebaseId,
} from '../../api/firestore/utils';
import {
  createUserDocument,
  getAllUsers,
  getUserDocumentWithEmail,
} from '../../services/user';
import {UserActions} from '../features/user';
import {UsersActions} from '../features/users';
import {PostsActions} from '../features/posts';
import {MessageThreadsActions} from '../features/messageTheads';
import {MessagesActions} from '../features/messages';
import {FriendshipsActions} from '../features/friendships';

type CreateUserAccountThunkProps = {
  password: string;
  onSuccess: () => void;
  onError: () => void;
};

export const createUserAccountThunk = (
  props: CreateUserAccountThunkProps,
): AppThunk<void> => {
  const {password, onSuccess, onError} = props;

  return async (_, state) => {
    try {
      const newUser = Object.assign({}, state().user);

      newUser.id = generateFirebaseId(FIREBASE_COLLECTIONS.USER);
      newUser.createdDate = Date.now();

      await auth().createUserWithEmailAndPassword(newUser.email, password);

      await createUserDocument(newUser);

      onSuccess();
    } catch (error) {
      console.log(error);
      return onError();
    }
  };
};

type TakeUserToAppThunkProps = {
  email: string;
  onSuccess: () => void;
  onError: () => void;
};

export const takeUserToAppThunk = (
  props: TakeUserToAppThunkProps,
): AppThunk<void> => {
  const {email, onSuccess, onError} = props;

  return async dispatch => {
    try {
      const user = await getUserDocumentWithEmail(email);

      dispatch(UserActions.setUser(user));
      dispatch(UsersActions.addUsers([user]));

      dispatch(getAllPostsThunk());
      dispatch(getAllUsersThunk());
      dispatch(getFrienshipsForUserThunk(user.id));

      onSuccess();
    } catch (error) {
      console.log(error);
      return onError();
    }
  };
};

export const getAllUsersThunk = (): AppThunk<void> => {
  return async dispatch => {
    try {
      const users = await getAllUsers();
      dispatch(UsersActions.addUsers(users));
    } catch (error) {
      console.log('Could not retrieve all Users', error);
    }
  };
};

type SignInThunkProps = {
  password: string;
  onSuccess: () => void;
  onError: () => void;
};

export const signInThunk = (props: SignInThunkProps): AppThunk<void> => {
  const {password, onSuccess, onError} = props;

  return async (dispatch, state) => {
    const {email} = state().user;

    try {
      await auth().signInWithEmailAndPassword(email, password);

      dispatch(takeUserToAppThunk({email, onSuccess, onError}));
    } catch (error) {
      console.log(error);
      return onError();
    }
  };
};

export const signOutUserThunk = (): AppThunk<void> => {
  return async dispatch => {
    try {
      dispatch(UserActions.resetUser());
      dispatch(UsersActions.resetUsers());
      dispatch(PostsActions.resetPosts());
      dispatch(MessageThreadsActions.resetMessageThreads());
      dispatch(MessagesActions.resetMessages());
      dispatch(FriendshipsActions.resetFriendships());
    } catch (error) {
      console.log('Could not sign out user', error);
    }
  };
};
