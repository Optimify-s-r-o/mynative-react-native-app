import React from 'react';
import { View, Text, TextInput as NativeTextInput, StyleSheet } from 'react-native';
import {
  Control,
  FieldValues,
  FieldErrors,
  Path,
  Controller,
  RegisterOptions,
} from 'react-hook-form';

type TextInputType = 'text' | 'password' | 'email';

export const TextInput = <T extends FieldValues>({
  control,
  name,
  label,
  description,
  errors,
  rules,
  type = 'text',
}: {
  control: Control<T, any>;
  name: Path<T>;
  label: string;
  description?: string;
  errors?: FieldErrors<T>;
  rules?: RegisterOptions;
  type?: TextInputType;
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, onBlur, value } }) => (
        <View>
          <Text style={styles.label}>{label}</Text>
          <NativeTextInput
            style={styles.input}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            secureTextEntry={type === 'password'}
            keyboardType={type === 'email' ? 'email-address' : 'default'}
          />
          {description && <Text style={styles.description}>{description}</Text>}
          {errors && errors[name] && <Text style={styles.error}>{errors[name].message}</Text>}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  label: {
    marginBottom: 8,
    fontSize: 12,
    fontWeight: '500',
    color: '#696990',
    paddingHorizontal: 10,
  },
  input: {
    backgroundColor: '#dce5e7',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  description: {
    marginTop: 8,
    fontSize: 12,
    color: '#696990',
    paddingHorizontal: 10,
  },
  error: {
    marginTop: 8,
    fontSize: 12,
    color: '#b90000',
    paddingHorizontal: 10,
  },
});
