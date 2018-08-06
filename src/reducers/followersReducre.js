// import objectAssign from 'object-assign';
import initialState from './initialState';
import * as types from '../constants/constants';

export default function followersReducer(state = initialState.followers, action) {

  switch (action.type) {
    case types.GET_FOLLOWERS_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
