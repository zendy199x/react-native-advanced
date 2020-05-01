import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

function FirstFunctionalComponent(props) {
  return (
    <View>
      <Text>First Functional Component</Text>
      <Text>{props.text}</Text>
    </View>
  );
}

class FirstClassComponent extends React.Component {
  //JSX Javascript XML
  render() {
    const a = 1 + 5;
    const b = function () {
      return 'function';
    };
    return (
      <View>
        <Text>First Class Component</Text>
        <Text>{a}</Text>
        <Text>{b()}</Text>
        <Text>{this.props.text}</Text>
      </View>
    );
  }
}

const App = () => {
  return (
    <View style={styles.container}>
      <Text>React Native</Text>
      <TextInput placeholder="something" />
      <FirstFunctionalComponent text={'Hello'} />
      <FirstClassComponent text={'Hello class'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
