import { TextInput } from 'components/Form/TextInput';
import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import { Submit } from 'components/Form/Submit';
import { Navigation } from 'screens/components/Navigation';
import { Routes } from 'navigation/routes';
import { AuthLayout } from 'components/Layout/AuthLayout';
import { TextButton } from 'components/Form/Button/TextButton';
import { useThemeContext } from 'context/Theme/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from 'styles/global';
import { styles } from 'screens/Auth/SignIn/styles';

export const Form = ({ control, handleSubmit }: { control: any; handleSubmit: () => void }) => {
  const { styleSheet } = useThemeContext();

  const navigator = useNavigation();

  const navigateTo = (to: any) => {
    navigator.navigate(to);
  };
  return (
    <AuthLayout title={'Welcome to the World of Languages'}>
      {/** @EditableProperty(property: source, type: asset) */}
      {/*<Image source={{ uri: '/no-image.png' }} />*/}
      <View style={styles.auth}>
        <TextInput name={'email'} control={control} label={'E-mail'} />
        <TextInput control={control} name={'password'} label="Password" type="password" />

        <Submit title={'Sign in'} onPress={handleSubmit} />

        {/** @EditableProperty(property: title, type: text) */}
        {/** @EditableProperty(property: onPress, type: navigation) */}
        <View style={styleSheet.gridCenteredRow}>
          <TextButton title="Forgotten password?" onPress={() => {}} />
        </View>
      </View>

      <View style={styleSheet.gridSpaceBetween}>
        {/** @EditableProperty(property: title, type: text) */}
        {/** @EditableProperty(property: to, type: route) */}
        <View style={styleSheet.gridItem}>
          <TextButton title="Sign Up" onPress={() => navigateTo(Routes.SignUp)} />
        </View>
        <View style={styleSheet.gridItem}>
          <TextButton title="Verification" onPress={() => navigateTo(Routes.SignUp)} />
        </View>
      </View>
    </AuthLayout>
  );
};
