import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

// const {height} = Dimensions.get('window');

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
      }}>
      <View
        style={{
          flex: 1,
          // height: height / 4,
          backgroundColor: 'green',
        }}></View>
      <View
        style={{
          flex: 2,
          // height: height / 2,
          backgroundColor: 'blue',
        }}></View>
      <View
        style={{
          flex: 1,
          // height: height / 4,
          backgroundColor: 'yellow',
        }}></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
