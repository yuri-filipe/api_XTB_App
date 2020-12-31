import React from 'react';
import {View, ActivityIndicator, Text, StyleSheet} from 'react-native';

const Index: React.FC = () => {
  return (
    <View
      style={{
        display:"flex",
        flexDirection:"row",
        alignContent:"center",
        alignItems:"center",
      }}>
      <ActivityIndicator size="large" color="#00b276" />
      <Text
        style={{
          marginLeft: 8,
          textTransform: 'uppercase',
          fontSize: 15,
          color: '#fff',
        }}>
        Recebendo dados...
      </Text>
    </View>
  );
};
export default Index;
