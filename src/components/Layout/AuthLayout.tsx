import React, { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const AuthLayout = ({ title, children }: { title: string; children: ReactNode }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    fontWeight: '600',
    marginBottom: 20,
  },
  container: {
    flexGrow: 1,
    marginTop: 50,
    marginHorizontal: 14,
    fontSize: 20,
    fontWeight: '600',
  },
});
