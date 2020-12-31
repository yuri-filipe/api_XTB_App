import React from 'react';
import Header from './components/header/Index';
import NavigationBar from 'react-native-navbar-color';
import store from './store/index';
import {Provider} from 'react-redux';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Home from './pages/Home';
import OneSignal from './hooks/oneSignal';
const App = () => {
  NavigationBar.setColor('#152126');
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#152126" barStyle="light-content" />
      <OneSignal />
      <Home />
    </Provider>
  );
};

export default App;
