import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';
import { ContextProvider } from './src/context/ContextProvider';

const App = () => {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) return null;

  return (
    <ContextProvider>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar />
      </SafeAreaProvider>
    </ContextProvider>
  );
};

export default App;
