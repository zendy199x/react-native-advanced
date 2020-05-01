import React from 'react';
import {View, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
      }}>
      <View
        //inline style
        style={styles.redSquare}></View>
      <View style={styles.greenSquare}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  redSquare: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
  },
  greenSquare: {
    height: 100,
    width: 100,
    backgroundColor: 'green',
  },
});

export default App;
