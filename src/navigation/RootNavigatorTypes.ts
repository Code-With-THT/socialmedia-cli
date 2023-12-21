import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export enum ROOT_ROUTES {
  LANDING = 'LANDING',
  HOME = 'HOME',
  SIGN_UP = 'SIGN_UP',
}

export type RootStackParamList = {
  [ROOT_ROUTES.LANDING]: undefined;
  [ROOT_ROUTES.HOME]: undefined;
  [ROOT_ROUTES.SIGN_UP]: undefined;
};

export type RootStackNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ROOT_ROUTES.LANDING
>;
