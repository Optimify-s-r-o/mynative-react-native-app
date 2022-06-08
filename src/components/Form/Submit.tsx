import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native';

export const Submit = ({
  disabled,
  onPress,
  title,
  pending,
  children,
}: {
  title?: string;
  disabled?: boolean;
  onPress: any;
  pending?: boolean;
  children?: React.ReactNode;
  color?: string;
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} disabled={disabled}>
      {title && <Text style={styles.title}>{title}</Text>}
      {children && children}
      {pending && <ActivityIndicator color="#fff" />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 7,
    padding: 10,

    backgroundColor: '#253bbb',
    borderRadius: 5,
    color: '#fff',
  },
  title: {
    fontSize: 15,
    color: '#fff',
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 10,

    backgroundColor: '#dce5e7',

    borderRadius: 8,
  },
  description: {
    marginTop: 8,
    paddingHorizontal: 10,

    color: '#696990',
    fontSize: 12,
  },
  error: {
    marginTop: 8,
    paddingHorizontal: 10,

    color: '#b90000',
    fontSize: 12,
  },
});
