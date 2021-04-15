import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import News from './src/pages/News';

export default function App() {
  return (
    <View>
      <News />
      <StatusBar style='light' backgroundColor={'#D71B3B'} />
    </View>

  );
}

