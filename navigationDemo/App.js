import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Screen</Text>
      <Button
        title="Login"
        onPress={() => {
          navigation.replace('Home');
        }}
      />
    </View>
  );
};

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title="To do Detail"
        onPress={() => {
          navigation.navigate('Detail');
        }}
      />
    </View>
  );
};

const Detail = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Detail Screen</Text>
      <Button
        title="Go back"
        onPress={() => {
          navigation.goBack();
        }}
      />

      <Button
        title="Logout"
        onPress={() => {
          navigation.replace('Login');
        }}
      />
    </View>
  );
};

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator headerMode='none'>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Detail" component={Detail} />
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
  text: {
    fontSize: 35,
    fontWeight: '600',
    marginBottom: 30
  },
});

export default App;
