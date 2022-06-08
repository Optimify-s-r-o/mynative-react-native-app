import React from 'react';

import { Routes } from 'navigation/routes';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Form } from './Form';
import { useNavigation } from '@react-navigation/native';

export const Screen = () => {
  const navigator = useNavigation<any>();

  const { control } = useForm({
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

  const signUp = () => {
    navigator.navigate(Routes.SignIn);
  };

  return <Form control={control} handleSubmit={signUp} />;
};
