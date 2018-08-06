// settings for front end


// USER ACTIONS
export const GET_FOLLOWERS = "GET_FOLLOWERS";
export const GET_FOLLOWERS_SUCCESS = "GET_FOLLOWERS_SUCCESS";


// EXPORT FUNCTIONS
export const githubUrl = (username) => {
  return `https://api.github.com/users/${username}/followers`;
}