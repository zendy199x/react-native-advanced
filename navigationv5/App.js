import React from 'react';
import {StyleSheet, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        title="Go to Detail"
        onPress={() => {
          navigation.navigate('Detail'); // tạo ra màn hình Detail duy nhất và đặt nó lên trên Stack
          // navigation.push('Detail');
        }}
      />

      <Button
        title="Replace"
        onPress={() => {
          navigation.replace('Detail'); // tạo ra màn hình mới và đè lên màn hình cũ - không quay lại Home được
        }}
      />
    </View>
  );
};

const Detail = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        title="Go to Detail again"
        onPress={() => {
          navigation.push('Detail'); // mỗi lần gọi tạo ra 1 màn hình Detail và không quan tâm là màn hình Detail đó có hay chưa
        }}
      />

      <Button
        title="Go to Top"
        onPress={() => {
          navigation.popToTop(); // lấy tất cả màn hình ra trừ màn hình đầu tiên - trở lại màn hình Home
        }}
      />

      <Button
        title="Go back"
        onPress={() => {
          navigation.goBack(); // lấy màn hình trên cùng Stack và trở lại màn hình trước đó
        }}
      />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Detail" component={Detail}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
