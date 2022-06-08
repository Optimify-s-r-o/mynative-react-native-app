import { StyleSheet } from 'react-native';

export const Colors = {
  dark: 'black',
  light: 'white',
};

const baseBoxStyles = {};

export const lightStyleSheet = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    ...baseBoxStyles,
  },
  gridRow: {
    flexDirection: 'row',
  },
  gridItem: {
    width: '50%',
  },
  gridCenteredRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export const darkStyleSheet = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    ...baseBoxStyles,
  },
  gridRow: {
    flexDirection: 'row',
  },
  gridItem: {
    width: '50%',
  },
  gridCenteredRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
