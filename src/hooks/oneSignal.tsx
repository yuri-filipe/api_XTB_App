import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import OneSignal from 'react-native-onesignal'; // Import package from node modules
import api from '../services/api';

export default function Index() {
  const stop = async () => {
    let {data} = await api.post('/api/v1/stopNotification', {
      token: 'ff14c67a-8273-4679-a843-82f878b9ef41',
      data: {},
    });
  };
  useEffect(() => {
    OneSignal.init('f3130a11-4af6-4d72-bc39-0137b6adc970');
    OneSignal.enableVibrate(true);
    OneSignal.addEventListener('opened', onOpened);

    return () => {
      OneSignal.removeEventListener('opened', onOpened);
    };
  }, []);

  const onOpened = (result) => {
    stop();
  };
  return null;
}
