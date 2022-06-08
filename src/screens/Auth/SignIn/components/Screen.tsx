import React from 'react';

import { Routes } from 'navigation/routes';
import { useThemeContext } from 'context/Theme/ThemeContext';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Form } from './Form';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';

export const Screen = () => {
  const theme = useThemeContext();
  const navigator = useNavigation<any>();

  const { control } = useForm({
    defaultValues: {
      phone: '+420',
      password: '',
    },
    resolver: yupResolver(
      yup
        .object({
          password: yup
            .string()
            .min(5, 'Password is to short')
            .max(50, 'Password is to lomng')
            .required('Required field'),
          email: yup
            .string()
            .email('You must enter valid email address.')
            .required('Required field'),
        })
        .required()
    ),
  });

  const signIn = () => {
    navigator.navigate(Routes.Portal);
  };

  return <Form control={control} handleSubmit={signIn} />;
};
