import { StyleSheet } from 'react-native';

export const Colors = {
  dark: 'black',
  light: 'white',
};

const baseBoxStyles = {};

export const lightStyleSheet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  },
  gridCentered: {
    alignItems: 'center',
    justifyContent: 'center',
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
    flex: 1,
    backgroundColor: '#fff',
  },
  box: {
    ...baseBoxStyles,
    borderColor: Colors.light,
  },
  gridRow: {
    flexDirection: 'row',
  },
  gridCentered: {
    alignItems: 'center',
    justifyContent: 'center',
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
