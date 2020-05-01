import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

// const {height} = Dimensions.get('window');

const App = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 1, backgroundColor: 'green'}}></View>
        <View style={{flex: 1, backgroundColor: 'red'}}></View>
      </View>
      <View style={{flex: 2, flexDirection: 'row'}}>
        <View style={{flex: 1, backgroundColor: 'blue'}}></View>
        <View style={{flex: 1, backgroundColor: 'yellow'}}></View>
        <View style={{flex: 2, backgroundColor: 'green'}}></View>
      </View>
      <View style={{flex: 3}}>
        <View style={{flex: 1, backgroundColor: 'red'}}></View>
        <View style={{flex: 1, backgroundColor: 'green'}}></View>
        <View style={{flex: 2, backgroundColor: 'blue'}}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
