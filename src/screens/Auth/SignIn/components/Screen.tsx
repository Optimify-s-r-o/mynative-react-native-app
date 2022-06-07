import { Text, View } from 'react-native';
import React from 'react';
import { styles } from '../styles';
import { Routes } from 'navigation/routes';
import { Navigation } from 'screens/components/Navigation';
import { useThemeContext } from 'context/Theme/ThemeContext';

export const Screen = () => {
  const theme = useThemeContext();

  return (
    <View style={[theme.styleSheet.box, styles.container]}>
      {/**
         Please don't delete this comment block.
         Deleting this comment block will cause non-functionality of MyNative.
         <@MyNativeView>
         **/}

      <Text>SignIn</Text>

      <Navigation to={Routes.SignUp} title={'SignUp'} />

      <Navigation to={Routes.ForgottenPassword} title={'ForgottenPassword'} />

      <Navigation to={Routes.Portal} title={'Portal'} />
      {/**
         Please don't delete this comment block.
         Deleting this comment block will cause non-functionality of MyNative.
         <@MyNativeView/>
         **/}
    </View>
  );
};
