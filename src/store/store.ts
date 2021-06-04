import {createStore, combineReducers} from 'redux';
import {tagReducer} from './reducers/tagReducer';

const reducer = combineReducers({tagSource: tagReducer});

const store = createStore(reducer);

export default store;