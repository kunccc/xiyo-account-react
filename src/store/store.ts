import {createStore, combineReducers} from 'redux';
import {tagReducer} from './reducers/tagReducer';
import {tabReducer} from './reducers/tabReducer';

const reducer = combineReducers({
  tagSource: tagReducer,
  tab: tabReducer
});

const store = createStore(reducer);

export default store;