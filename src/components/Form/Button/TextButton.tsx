import React, { ReactNode } from 'react';
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const TextButton = ({ title, onPress }: { title: string; onPress: () => void }) => {
  const handlePress = (event: GestureResponderEvent) => {
    onPress();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#565656',
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
  },
  button: {},
  container: {
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 14,

    fontSize: 20,
    fontWeight: '600',
  },
});
