import { Button, Text, View } from 'react-native';
import React from 'react';
import { styles } from '../styles';
import { Routes } from 'navigation/routes';
import { Navigation } from 'screens/components/Navigation';
import { useThemeContext } from 'context/Theme/ThemeContext';
import { useForm } from 'react-hook-form';
import { TextInput } from 'src/plugins/MyNativeForm/TextInput';

export const Screen = () => {
  const theme = useThemeContext();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = (data: any) => {
    // TODO
  };

  return (
    <View style={[theme.styleSheet.box, styles.container]}>
      {/**
         Please don't delete this comment block.
         Deleting this comment block will cause non-functionality of MyNative.
         <@MyNativeView>
         **/}

      <Text>SignIn</Text>

      <TextInput control={control} name="email" label="Email" errors={errors} />
      <TextInput control={control} name="password" label="Password" errors={errors} />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />

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
