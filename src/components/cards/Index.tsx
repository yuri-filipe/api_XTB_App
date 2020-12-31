import React from 'react';
import {View, Text} from 'react-native';
import {style} from '../../styles/home';

interface Props {
  text: string;
  value: number;
}
const Index: React.FC<Props> = ({text, value}) => {
  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        alignContent: 'center',
        width: 100,
        height: 70,
        borderRadius: 6,
        borderStyle: 'solid',
        borderColor: '#2d3940',
        borderWidth: 3,
      }}>
      <Text style={TextStyle}>{text}</Text>
      <Text style={{...TextStyle, color: '#00b276'}}>{value.toFixed(2)}</Text>
    </View>
  );
};
const TextStyle = {
  color: '#fff',
  fontSize:15
};

export default Index;
