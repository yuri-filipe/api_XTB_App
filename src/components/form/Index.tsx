import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, Text, StyleSheet, Alert} from 'react-native';
import Input from '../input/Index';
import Button from '../button/Index';
import Chart from '../chart/Index';
import {useSelector, useDispatch} from 'react-redux';
import {StoreType} from '../../store/types';
import api from '../../services/api';
import {mode, initialStore} from '../../store/action';
export default function Index() {
  const dispatch = useDispatch();
  const [button, setbutton] = useState(true);
  const Mode = useSelector((state: StoreType) => state.mode);
  const serverStatus = useSelector((state: StoreType) => state.serverStatus);
  const [state, setstate] = useState([0, 0]);
  const send = async () => {
    let {data} = await api.post('/api/v1/params', {
      token: 'ff14c67a-8273-4679-a843-82f878b9ef41',
      data: {takeProfit: state[0], stopLoss: state[1] * -1},
    });
  };
  const stop = async () => {
    let {data} = await api.post('/api/v1/stop', {
      token: 'ff14c67a-8273-4679-a843-82f878b9ef41',
      data: {},
    });
  };

  const changeParams = (e: any, type: number) => {
    let temp = state;
    temp[type] = Number(e);
    setstate(temp);
  };
  const setParams = () => {
    if (serverStatus && !Mode && state[0] !== 0 && state[1] !== 0) {
      dispatch(mode(true));
      send();
    } else if (serverStatus && Mode) {
      stop();
      dispatch(mode(false));
      setstate([0, 0]);
    }
  };
  return (
    <View style={styleView.view}>
      <Text style={styleView.text}>Parametros:</Text>
      {Mode && <Chart />}
      {!Mode && (
        <Input
          value={state[0].toString()}
          Change={(e) => changeParams(e, 0)}
          type="win"
        />
      )}
      {!Mode && (
        <Input
          value={state[1].toString()}
          Change={(e) => changeParams(e, 1)}
          type="loss"
        />
      )}
      <Button Click={() => setParams()} />
    </View>
  );
}

export const styleView = StyleSheet.create({
  view: {
    width: '85%',
    height: '30%',
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    opacity: 1,
    marginTop: '20%',
    justifyContent: 'space-between',
    backgroundColor: '#0e0e0e',
  },
  text: {
    fontSize: 20,
    textTransform: 'uppercase',
    color: '#fff',
  },
});
{
  /* <Input Type="win" />
<Input Type="loss" />
<Button /> */
}
