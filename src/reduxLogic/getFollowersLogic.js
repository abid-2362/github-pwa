// in polls/logic.js
import { createLogic } from 'redux-logic';
// import { sessionService } from 'redux-react-session';
import * as types from '../constants/constants';
import { getFollowersSuccess } from "../actions/getFollowersActions";
import toastr from 'toastr';
const githubUrl = types.githubUrl;

const getFollowersLogic = createLogic({
  type: types.GET_FOLLOWERS, // only apply this logic to this type
  debounce: 250,
  latest: true,
  process: function ({ getState, action }, dispatch, done) {
    let url = githubUrl(action.payload);
    fetch(url)
    .then( r => r.json())
    .then( response => {
      if(response.status === "offline") {
        toastr.error("Sorry, there is no internet connection");
        dispatch(getFollowersSuccess([]));
      } else {
        dispatch(getFollowersSuccess(response));
      }
    })
    .then(() => {
      done();
    });
  }
});


// pollsLogic
export default [
  getFollowersLogic,
];