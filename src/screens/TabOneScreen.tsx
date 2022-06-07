import React from 'react';
import { StyleSheet, View } from 'react-native';

import { RootTabScreenProps } from 'navigation/types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
