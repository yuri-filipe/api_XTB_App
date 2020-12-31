import React, {useEffect} from 'react';
import {style} from '../styles/home';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';

import List from '../components/list/Index';
import Header from '../components/header/Index';
import Form from '../components/form/Index';
import useUpdate from '../hooks/useUpdate';
import {useSelector} from 'react-redux';
import {StoreType} from '../store/types';
const Home: React.FC = () => {
  useUpdate();
  const serverStatus = useSelector((state: StoreType) => state.serverStatus);
  const xtbStatus = useSelector((state: StoreType) => state.xtbStatus);
  const maxLucro = useSelector((state: StoreType) => state.maxLucro);
  const maxPrejuizo = useSelector((state: StoreType) => state.maxPrejuizo);
  const timer = useSelector((state: StoreType) => state.timer);
  return (
    <View style={style.home}>
      <Header />
      <View style={{...styleView.view2}}>
        <List
          text={'SERVIDOR '}
          value={serverStatus ? 'online' : 'offline'}
          icone
        />
        <List text={'XTB '} value={xtbStatus ? 'online' : 'offline'} icone />
        <List text={'TEMPO DE CONEXÃO'} value={timer} />
        <List text={'MAIOR LUCRO '} value={maxLucro} />
        <List text={'MENOR LUCRO '} value={maxPrejuizo} />
      </View>
      <Form />
    </View>
  );
};
export default Home;
export const styleView = StyleSheet.create({
  view2: {
    width: '75%',
    marginTop: '50%',
    height: '20%',
    display: 'flex',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    opacity: 1,

    justifyContent: 'space-between',
  },
});
