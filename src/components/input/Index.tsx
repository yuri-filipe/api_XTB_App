import React, {useEffect} from 'react';
import {View, TextInput} from 'react-native';

import {StyleSheet} from 'react-native';

interface Props {
  type: 'win' | 'loss';
  value: any;
  Change(value: any): any;
}
const Index: React.FC<Props> = ({value, type, Change}) => {
  useEffect(() => {}, []);
  return (
    <View
      style={{
        backgroundColor: '#2d3940',
        width: '80%',
        borderRadius: 10,
      }}>
      <TextInput
      
        onChangeText={(e) => Change(e)}
        keyboardType={'numeric'}
        style={{
          color: type === 'loss' ? '#f00' : '#0f0',
          fontSize: 20,
          fontWeight: 'bold',
        }}
        placeholder={type === 'loss' ? 'STOP LOSS' : 'TAKE PROFIT'}
      >{value}</TextInput>
    </View>
  );
};
export default Index;

//  backgroundColor:Type ==="loss"?"#ffd3d3":"#d3ffd3",
