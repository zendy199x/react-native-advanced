import React from 'react';
import {StyleSheet, View, Button, StatusBar} from 'react-native';

StatusBar.setHidden(true);

class Comp extends React.Component {
  render() {
    console.log('render');
    return <View style={styles.redSquare}></View>;
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    };
    // state = {isShow: true};
    console.log('constructor');
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.isShow ? <Comp /> : <View />}
        {/* <Button title="forceUpdate" onPress={() => this.forceUpdate()} /> */}
        <Button
          title="Hide Square"
          onPress={() => this.setState({isShow: false})}
        />
      </View>
    );
  }

  componentDidMount() {
    console.log('componentDidMount');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  redSquare: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});
