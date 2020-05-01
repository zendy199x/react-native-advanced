import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

const Home = ({navigation, route}) => {
  const [number, setNumber] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>

      <Text style={styles.textTitle}>Number Detail 1</Text>
      <Text style={styles.text}>{number}</Text>

      <Text style={styles.textTitle}>Number Detail 2</Text>
      <Text style={styles.text}>{route.params.number2}</Text>

      <Button
        title="To do Detail"
        onPress={() => {
          navigation.navigate('Detail', {
            number,
            setNumber,
            // id: 1,
            // count: 10,
            // obj: {
            //   a: 1,
            //   b: 2,
            // },
          });
        }}
      />

      <Button
        title="To do Detail 2"
        onPress={() => {
          navigation.navigate('Detail2');
        }}
      />
    </View>
  );
};

const Detail = ({navigation, route}) => {
  const [number, setNumber] = useState(route.params.number);
  console.log(route);
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Detail Screen</Text>
      <Text style={styles.text}>{number}</Text>
      <Button
        title="Increase"
        onPress={() => {
          setNumber(number + 1);
          route.params.setNumber(number + 1);
        }}
      />

      {/* <Text style={styles.text}>{route.params.count}</Text>
      <Text style={styles.text}>{route.params.obj.a}</Text> */}
    </View>
  );
};

const Detail2 = ({navigation}) => {
  const [number2, setNumber2] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Detail 2 Screen</Text>
      <Text style={styles.text}>{number2}</Text>
      <Button
        title="Increase 2"
        onPress={() => {
          setNumber2(number2 + 2);
        }}
      />

      <Button
        title="Go back Home"
        onPress={() => {
          navigation.navigate('Home', {
            number2,
          });
        }}
      />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} initialParams={{number2: 0}} />
        <Stack.Screen
          name="Detail"
          component={Detail}
          // initialParams={{
          //   count: 0,
          //   obj: {a: 0, b: 0},
          // }}
        />
        <Stack.Screen name="Detail2" component={Detail2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    fontSize: 35,
    fontWeight: '600',
    marginBottom: 30,
  },
  text: {
    fontSize: 25,
    fontWeight: '600'
  }
});

export default App;
