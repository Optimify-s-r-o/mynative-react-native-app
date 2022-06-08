import { StyleSheet } from 'react-native';

export const Colors = {
  dark: 'black',
  light: 'white',
};

const baseBoxStyles = {};

export const lightStyleSheet = StyleSheet.create({
  container: {
    backgroundColor: Colors.light,
  },
  box: {
    ...baseBoxStyles,
    borderColor: Colors.dark,
  },
  gridRow: {
    flexDirection: 'row',
  },
  gridItemHalf: {
    width: '50%',
    backgroundColor: 'red',
  },
  gridCenteredRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export const darkStyleSheet = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark,
  },
  box: {
    ...baseBoxStyles,
    borderColor: Colors.light,
  },
  gridRow: {
    flexDirection: 'row',
  },
  gridItemHalf: {
    width: '40%',
    backgroundColor: 'red',
  },
  gridCenteredRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
