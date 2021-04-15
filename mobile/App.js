import { StatusBar } from 'expo-status-bar';
import React from 'react';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor='#D71B3B' />
      <Routes />
    </NavigationContainer>
  );
}

