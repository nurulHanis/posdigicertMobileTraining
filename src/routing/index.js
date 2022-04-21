import * as React from 'react';
import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {LandingPage} from '../page/LandingPage';
import {NextPage} from '../page/NextPage';
import { AddItem } from '../page/api/AddItem';
import {About} from '../page/About';
import { Provider } from 'react-redux';
import {store} from '../redux/store'

const Stack = createNativeStackNavigator();

export default function AppMain() {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Add Item" component={AddItem} />
            <Stack.Screen name="Home" component={LandingPage} />
            <Stack.Screen name="Second Page" component={NextPage} />
            <Stack.Screen name="About" component={About} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </ThemeProvider>
  );
}
