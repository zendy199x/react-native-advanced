import React from 'react';
import {Button, StyleSheet, Text, View, StatusBar} from 'react-native';

StatusBar.setHidden(true);

// export default class App extends React.Component {
//   state = {
//     count: 1,
//   };
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.text}>{this.state.count}</Text>
//         <Button
//           title="Change"
//           onPress={() => this.setState({count: this.state.count + 1}, () => {})}
//         />
//         {/* <Button
//           title="Change"
//           onPress={() => {
//             this.setState((state) => ({count: state.count + 1}));
//           }}
//         /> */}
//       </View>
//     );
//   }
// }

export default function App() {
  const [count, setCount] = React.useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <Button
        title="Change"
        onPress={() => {
          setCount(count + 2);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 35,
    fontWeight: '600',
  },
});
