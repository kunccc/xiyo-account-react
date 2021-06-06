import {createStore, combineReducers} from 'redux';
import {tagReducer} from './reducers/tagReducer';
import {tabReducer} from './reducers/tabReducer';
import {noteReducer} from './reducers/noteReducer';

const reducer = combineReducers({
  tagsSource: tagReducer,
  tab: tabReducer,
  note: noteReducer
});

const store = createStore(reducer);

export default store;