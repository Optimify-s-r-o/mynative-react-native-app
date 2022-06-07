import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center',
  }, header: {}, body: {}, footer: {},
});

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const layout = {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};