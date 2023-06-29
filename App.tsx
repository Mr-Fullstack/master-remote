/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import AppThemeContext from './src/contexts/ThemeContext';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import RouterRoot from './src/routes';
import AppUserContext from './src/contexts/UserContext';

type RootStackParamList = {
  Dashboard: undefined;
  Signin: undefined;
  Signup: undefined;
  Password:undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  
  const isDarkMode = useColorScheme() === 'dark';

  const mainStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex:1
  };

  return (
    <AppThemeContext>
      <AppUserContext>
        <SafeAreaView style={mainStyle}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={mainStyle.backgroundColor}
          />
          <RouterRoot/>
        </SafeAreaView>
      </AppUserContext>
    </AppThemeContext>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
