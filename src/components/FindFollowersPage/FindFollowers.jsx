import React from 'react';
import PropTypes from 'prop-types';

const FindFollowers = ({handleChange, handleSubmit, state}) => {
  const {username, followers, loading, offline} = state;
  var followersList;
  if(followers.length > 0) {
    followersList = followers.map( (user, index) => {
      return (
        <div className="row user-info" key={index}>
            <div className="col-12 col-sm-6 col-md-3 col-xl-2">
              <img className="img-fluid user-photo" src={user.avatar_url} alt={user.login} />
            </div>
            <div className="col-12 col-sm-6 col-md-9 col-xl-10">
              <p>Login Username: {user.login}</p>
              <p>Github Profile: <a href={user.html_url} target="_blank">{user.html_url}</a></p>
              <p>Type: {user.type}</p>
            </div>
          </div>
      )
    });
  }else {
    followersList = "No followers found for this user";
  }
  return (
    <div>
      <section className="search-form">
        <div className="container">
          <h3>Find followers of a github user</h3>
          <div className="form-group">
            <label htmlFor="username">Enter Username</label>
            <input type="text" onChange={handleChange} value={username} name="username" id="username" className="form-control" />
          </div>
          <div className="form-group">
            <button disabled={loading} className="btn btn-success" onClick={() => handleSubmit()}>{loading ? "Loading..." : "Find Followers"}</button>
          </div>
        </div>
      </section>

      <section className="followers-output">
        <div className="container">
          <h4>Displaying <b>{followers.length}</b> Followers</h4>
          {followersList}
          <br/>
          {offline ? "Sorry, no internet connection" : ""}
        </div>
      </section>
    </div>
  );
};
FindFollowers.defaultProps = {
  username: '',
}

FindFollowers.propTypes = {
  state: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default FindFollowers;