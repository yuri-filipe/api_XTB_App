import React, {useState} from 'react';
import {Text, View} from 'react-native';
import useSignal from '../../hooks/useSignal';
import {style} from '../../styles/home';

interface Props {
  value: string | number;
  text: string;
  icone?: boolean;
}

const Index: React.FC<Props> = ({text, value, icone}) => {
  const [state, type, color, setstate] = useSignal(value);

  return (
    <View style={style.list}>
      {icone && (
        <View
          style={{
            backgroundColor: state === 'online' ? '#0f05' : '#f005',
            width: 22,
            height: 22,
            display: 'flex',
            borderRadius: 50,
          }}
        />
      )}
      <Text
        style={{
          marginLeft: 8,
          textTransform: 'uppercase',
          fontSize: 15,
          color: '#fff',
        }}>
        {text}
        <Text
          style={{
            color: color,
          }}>
          {" " + state}
        </Text>
      </Text>
    </View>
  );
};
export default Index;
