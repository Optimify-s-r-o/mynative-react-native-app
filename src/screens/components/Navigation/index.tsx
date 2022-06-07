import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity } from 'react-native';
import React from 'react';

export const Navigation = ({ title, to }: { title: string; to: any }) => {
  const navigator = useNavigation();

  const navigateTo = () => {
    navigator.navigate(to);
  };
  return (
    <TouchableOpacity onPress={navigateTo}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};
