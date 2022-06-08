import React, { Fragment, ReactNode } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useThemeContext } from 'context/Theme/ThemeContext';
import { SafeAreaView } from 'react-native-safe-area-context';

export const AuthLayout = ({
  image,
  title,
  children,
}: {
  image: any;
  title: string;
  children: ReactNode;
}) => {
  const { styleSheet } = useThemeContext();

  return (
    <Fragment>
      <SafeAreaView style={styles.safeAreaViewHeader} />
      <SafeAreaView style={styles.safeAreaViewBottom}>
        <View style={styles.container}>
          <View style={styleSheet.gridCenteredRow}>
            <Image source={image} style={{ width: 200, height: 200 }} />
          </View>

          <Text style={styles.title}>{title}</Text>
          {children}
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  safeAreaViewHeader: {
    flex: 0,
    backgroundColor: '#fff',
  },
  safeAreaViewBottom: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 35,
    fontWeight: '600',
    marginBottom: 20,
  },
  container: {
    backgroundColor: '#fff',
    flexGrow: 1,
    paddingHorizontal: 14,
    fontSize: 20,
    fontWeight: '600',
  },
});
