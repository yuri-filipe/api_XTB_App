import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {style} from '../../styles/home';
import Card from '../cards/Index';
import {useSelector} from 'react-redux';
import {StoreType} from '../../store/types';
import useSignal from '../../hooks/useSignal';

type State = [number, '#0f0' | '#f00' | '#fff'];
const Index: React.FC = () => {
  const data = useSelector((state: StoreType) => state.data);
  const [state, type, color, setstate] = useSignal(data.equity - data.balance);
  return (
    <View style={style.header}>
      <View style={styleView.view}>
        <Card text="BALANÇO" value={data.balance} />
        <Card text="SALDO" value={data.equity} />
      </View>
      <View>
        <Text
          style={{
            color: '#fff',
            fontSize: 20,
          }}>
          LUCRO:{' '}
          <Text
            style={{
              color: color,
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            {state}
          </Text>
          {'  '}
          USD
        </Text>
      </View>
    </View>
  );
};
export default Index;

export const styleView = StyleSheet.create({
  view: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    alignContent: 'space-between',
  },
});
