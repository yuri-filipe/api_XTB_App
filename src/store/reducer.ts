import {Reducer} from 'redux';
import {State} from '../hooks/types';
import {ActionsType} from './action';
import {StoreType} from './types';
const initialState: StoreType = {
  maxLucro: 0,
  maxPrejuizo: 0,
  mode: false,
  serverStatus: null,
  xtbStatus: null,
  data: State.data,
  timer: '00:00:00',
};

const Reducers: Reducer<StoreType> = (state = initialState, action) => {
  switch (action.type) {
    case ActionsType.INITIALSTORE:
      return {
        ...initialState,
      };
    case ActionsType.DATA:
      return {
        ...state,
        data: action.payload,
      };
    case ActionsType.TIMER:
      return {
        ...state,
        timer: action.payload,
      };
    case ActionsType.XTBSTATUS:
      return {
        ...state,
        xtbStatus: action.payload,
      };
    case ActionsType.SERVERSTATUS:
      return {
        ...state,
        serverStatus: action.payload,
      };
    case ActionsType.MODE:
      return {
        ...state,
        mode: action.payload,
      };
    case ActionsType.MAXLUCRO:
      return {
        ...state,
        maxLucro: action.payload,
      };
    case ActionsType.MAXPREJUIZO:
      return {
        ...state,
        maxPrejuizo: action.payload,
      };
    case ActionsType.INITIALDATA:
      return {
        ...state,
        data: State.data,
      };
    default:
      return state;
  }
};

export default Reducers;
