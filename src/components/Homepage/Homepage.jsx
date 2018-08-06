import React from 'react';

const Homepage = () => {
  return (
    <section>
      <div className="container">
        <h3>Github Progressive Web App</h3>
        <p>
          Assignment requirements
      </p>
        <ul>
          <li>Get Data from github user API</li>
          <li>
            Display his followers with
          <ul>
              <li>Photo of the user</li>
              <li>Username</li>
              <li>Link to the github profile</li>
              <li>User type</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};
Homepage.defaultProps = {
  // someProp: 'Some Value',
}

Homepage.propTypes = {
  // someValue: PropTypes.string,
}

export default Homepage;
