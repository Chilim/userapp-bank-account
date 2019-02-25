import { createStore } from 'redux';
import reducer from '../reducers';

const initialStore = { username: 'Janny', totalAmount: 2500701 };
export const store = createStore(reducer, initialStore);
