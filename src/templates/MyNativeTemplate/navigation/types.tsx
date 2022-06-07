import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootTabParamList = {
  Profile: undefined;
  Settings: undefined;
};

export type AuthStackParamList = {
  SignIn: undefined;
  ForgottenPassword: undefined;
  SignUp: undefined;
};

export type RootStackParamList = {
  Root: NavigatorScreenParams<AuthStackParamList> | undefined;
  Portal: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

declare global {
  // eslint-disable-next-line no-unused-vars
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
