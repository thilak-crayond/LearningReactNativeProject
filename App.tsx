/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

function App(): React.JSX.Element {
  return (
    <View style={styles.root}>
      <View style={styles.headerOfImage}>
        <Image
          source={require('./assets/Group.png')}
          alt="registerImage"
          style={styles.headerImg}
        />
        <Text style={styles.headerTextSx}>
          Earn loyalty for every {'\n'}purchase
        </Text>
      </View>
      <View style={styles.curveCard}>
        <Text>Curve card for BorderTopLeftRadius</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#CCEBE1',
  },
  headerImg: {
    alignSelf: 'center',
    width: 267.9,
    height: 169.94,
  },
  headerOfImage: {
    backgroundColor: '#CCEBE1',
    alignItems: 'center',
    padding: 16,
  },
  headerTextSx: {
    color: '#02111A',
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
    marginTop: 12,
  },
  curveCard: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '65%',
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: 'center',
  },
});

export default App;
