import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Home = ({ navigation, route }) => {
  const [points, setPoints] = useState(route.params?.points ?? 0);

  const handleWin = () => {
    const newPoints = points + 100;
    setPoints(newPoints);
    navigation.navigate('Result', { points: newPoints });
  };

  const handleLose = () => {
    const newPoints = points - 50;
    setPoints(newPoints);
    navigation.navigate('Result', { points: newPoints });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Points App</Text>
      <Text style={styles.points}>Points: {points}</Text>
      <View style={styles.buttonContainer}>
        <Button title="WIN" onPress={handleWin} color="#1E90FF" />
        <Button title="LOSE" onPress={handleLose} color="#FF6347" />
      </View>
    </View>
  );
};

const Result = ({ navigation, route }) => {
  const { points } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Result</Text>
      <Text style={styles.points}>Points: {points}</Text>
      <Button title="Back to Home" onPress={() => navigation.navigate('Home', { points })} color="#1E90FF" />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212', // Dark background
  },
  text: {
    fontSize: 30,
    color: '#FFFFFF', // White text
  },
  points: {
    fontSize: 20,
    marginVertical: 10,
    color: '#B0B0B0', // Light grey text for points
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});

export default App;
