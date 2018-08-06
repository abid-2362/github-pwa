import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import followersReducer from './followersReducre';
import { sessionReducer } from 'redux-react-session';

const rootReducer = combineReducers({
  routing: routerReducer,
  session: sessionReducer,
  followers: followersReducer,
});

export default rootReducer;