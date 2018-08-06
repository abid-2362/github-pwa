import * as types from '../constants/constants';

export function getFollowers(username) {
  return {
    type: types.GET_FOLLOWERS,
    payload: username
  }
}

export function getFollowersSuccess(followers) {
  console.log('getFollowersSuccess triggered');
  return {
    type: types.GET_FOLLOWERS_SUCCESS,
    payload: followers
  }
}