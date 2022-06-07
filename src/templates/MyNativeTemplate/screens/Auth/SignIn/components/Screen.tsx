import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles';
import { Routes } from 'navigation/routes';
import { Navigation } from 'screens/components/Navigation';
import { useThemeContext } from 'context/Theme/ThemeContext';
import { TextInput } from 'plugins/MyNativeForm/components/TextInput';
import { Form } from 'plugins/MyNativeForm/components/Form';

export const Screen = () => {
  const theme = useThemeContext();
  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
    // TODO your implementation
  };

  return (
    <View style={[theme.styleSheet.box, styles.container]}>
      {/**
         Please don't delete this comment block.
         Deleting this comment block will cause non-functionality of MyNative.
         <@MyNativeView>
         **/}

      <Text>SignIn</Text>

      <Form
        fields={{
          email: {
            default: '',
            render: (props) => (
              <TextInput
                label="Email"
                type="email"
                {...props}
                rules={{
                  required: 'You must enter valid email address.',
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'You must enter valid email address.',
                  },
                }}
              />
            ),
          },
          password: {
            default: '',
            render: (props) => (
              <TextInput
                label="Password"
                type="password"
                {...props}
                rules={{ required: 'You must enter password.' }}
              />
            ),
          },
        }}
        onSubmit={onSubmit}
      />

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
