import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export enum ROOT_ROUTES {
  LANDING = 'LANDING',
  HOME = 'HOME',
  SIGN_UP = 'SIGN_UP',
  SIGN_IN = 'SIGN_IN',
  MY_PROFILE = 'MY_PROFILE',
  MESSAGES = 'MESSAGES',
  POST_DETAIL_PAGE = 'POST_DETAIL_PAGE',
  USER_DETAIL_PAGE = 'USER_DETAIL_PAGE',
  MESSAGE_THREAD = 'MESSAGE_THREAD',
}

export type RootStackParamList = {
  [ROOT_ROUTES.LANDING]: undefined;
  [ROOT_ROUTES.HOME]: undefined;
  [ROOT_ROUTES.SIGN_UP]: undefined;
  [ROOT_ROUTES.SIGN_IN]: undefined;
  [ROOT_ROUTES.MY_PROFILE]: undefined;
  [ROOT_ROUTES.MESSAGES]: undefined;
  [ROOT_ROUTES.POST_DETAIL_PAGE]: undefined;
  [ROOT_ROUTES.USER_DETAIL_PAGE]: undefined;
  [ROOT_ROUTES.MESSAGE_THREAD]: undefined;
};

export type RootStackNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ROOT_ROUTES.LANDING
>;
