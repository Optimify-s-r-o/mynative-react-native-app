import React from 'react';
import { View, Text, TextInput as NativeTextInput, StyleSheet } from 'react-native';
import { Control, FieldValues, FieldErrors, Path, Controller } from 'react-hook-form';

export const TextInput = <T extends FieldValues>({
  control,
  name,
  label,
  description,
  errors,
}: {
  control: Control<T, any>;
  name: Path<T>;
  label: string;
  description?: string;
  errors?: FieldErrors<T>;
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <View>
          <Text style={styles.label}>{label}</Text>
          <NativeTextInput
            style={styles.input}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
          {description && <Text style={styles.description}>{description}</Text>}
          {errors && errors[name] && <Text>{errors[name]}</Text>}
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
});
