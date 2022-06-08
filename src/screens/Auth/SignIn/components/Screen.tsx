import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import { styles } from '../styles';
import { Routes } from 'navigation/routes';
import { Navigation } from 'screens/components/Navigation';
import { useThemeContext } from 'context/Theme/ThemeContext';
import { TextInput } from 'plugins/MyNativeForm/components/TextInput';
import { Form } from 'plugins/MyNativeForm/components/Form';
import login from 'plugins/MyNativeForm/actions/login';

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

      {/** @EditableProperty(property: source, type: asset) */}
      <Image source={{ uri: '/no-image.png' }} />

      {/** @EditableChildren(type: text) */}
      <Text>SignIn</Text>

      <Form
        /** @EditableProperty(property: fields, type: formFields) */
        fields={{
          email: {
            default: '',
            render: (props) => (
              /** @EditableProperty(property: label, type: text) */
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
              /** @EditableProperty(property: label, type: text) */
              <TextInput
                label="Password"
                type="password"
                {...props}
                rules={{ required: 'You must enter password.' }}
              />
            ),
          },
        }}
        /** @EditableProperty(property: onSubmit, type: formAction) */
        onSubmit={(data) => login(data /*, apiContext, userContext*/)}
      />

      {/** @EditableProperty(property: title, type: text) */}
      {/** @EditableProperty(property: onPress, type: navigation) */}
      <Button title="Forgotten password" onPress={() => {}} />

      {/** @EditableProperty(property: title, type: text) */}
      {/** @EditableProperty(property: to, type: route) */}
      <Navigation to={Routes.SignUp} title={'Sign up'} />

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
