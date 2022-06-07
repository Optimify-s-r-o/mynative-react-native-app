import { Text, View } from 'react-native';
import React from 'react';
import { styles } from '../styles';
import { Navigation } from 'screens/components/Navigation';
import { Routes } from 'navigation/routes';

export const Screen = () => {
  return (
    <View style={styles.container}>
      {/**
         Please don't delete this comment block.
         Deleting this comment block will cause non-functionality of MyNative.
         <@MyNativeView>
         **/}
      <Text>ForgottenPassword</Text>

      <Navigation to={Routes.SignUp} title={'SignUp'} />

      <Navigation to={Routes.SignIn} title={'SignIn'} />
      {/**
         Please don't delete this comment block.
         Deleting this comment block will cause non-functionality of MyNative.
         <@MyNativeView/>
         **/}
    </View>
  );
};
