/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { View } from 'react-native';
import Instructions from './Instructions';

export const App = () => {
  return (
    <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
      <Instructions />
    </View>
  );
};

export default App;
