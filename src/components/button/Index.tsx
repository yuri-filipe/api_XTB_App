import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import {StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {StoreType} from '../../store/types';
import {mode} from '../../store/action';

interface Props{
  Click():void
}
const Index: React.FC<Props> = ({Click}) => {
  const dispatch = useDispatch();
  const state = useSelector((state: StoreType) => state.mode);
  
  return (
    <Button
      onPress={Click}
      title={state ? 'configurações' : 'iniciar'}
      type="outline"
      titleStyle={{
        fontSize: 20,
        color: '#00b276',
        textTransform: 'uppercase',
      }}
      buttonStyle={{
        width: 280,
        height: 60,
        borderRadius: 10,
        marginBottom: 10,
        borderColor: '#00b276',
      }}></Button>
  );
};
export default Index;
