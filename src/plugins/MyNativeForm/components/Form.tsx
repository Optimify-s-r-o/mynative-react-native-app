import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import {
  useForm,
  FieldValues,
  FieldErrors,
  UnpackNestedValue,
  Control,
  RegisterOptions,
} from 'react-hook-form';
import { Gap } from './Gap';

type Fields<T> = {
  [field in keyof T]: {
    render: (props: {
      control: Control<T, any>;
      errors: FieldErrors<T>;
      name: keyof T;
      key: keyof T;
      rules?: RegisterOptions;
    }) => React.ReactNode;
    default?: any;
  };
};

export const Form = <T extends FieldValues>({
  fields,
  onSubmit,
}: {
  fields: Fields<T>;
  onSubmit: (data: UnpackNestedValue<T>, event?: React.BaseSyntheticEvent) => any | Promise<any>;
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<T, any>({
    defaultValues: Object.keys(fields).reduce<any>((obj, item) => {
      obj[item] = fields[item].default;
      return obj;
    }, {}),
  });
  return (
    <View style={styles.container}>
      <Gap gap={24}>
        {Object.keys(fields).map((field) =>
          fields[field].render({
            control,
            errors,
            name: field,
            key: field,
          })
        )}
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </Gap>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignSelf: 'stretch',
    flexDirection: 'column',
  },
  divider: {
    height: 32,
  },
});
