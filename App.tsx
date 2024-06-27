/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import RegisterScreen from './screens/registerScreen';

function App(): React.JSX.Element {

  return (
    <View style={styles.rootStyle}>
      <RegisterScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  rootStyle: {

  },
});

export default App;
