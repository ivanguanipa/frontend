import { combineReducers } from 'redux';
import productos from './productos/productosReductor';
import pasaportes from './pasaporte/pasaporteReductor';

export default combineReducers({ productos, pasaportes });
