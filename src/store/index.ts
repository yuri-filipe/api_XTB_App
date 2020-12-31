import {createStore, Store} from 'redux';
import Reducers from './reducer';

const store = createStore(Reducers);

export default store;
