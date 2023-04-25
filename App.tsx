import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './screens/Register';
import Login from './screens/Login';
import Home from './screens/Home';
import AllUsers from './screens/AllUsers';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name="AllUsers"
          component={AllUsers}
          options={{ animation: 'slide_from_right' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
