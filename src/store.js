import {createStore,applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import profileReducer from './components/Profile/reducer'
import {combineReducers} from 'redux';
import dashboardReducer from './components/DashBoard/reducer';


const rootReducer= combineReducers({profileReducer,dashboardReducer});

const store =	createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;