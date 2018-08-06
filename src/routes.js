/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Common/Header';
// import Homepage from './components/Homepage/HomepageContainer';
import Homepage from './components/Homepage/HomepageContainer';
import FindFollowersPage from './components/FindFollowersPage/FindFollowersContainer';
import NotFoundPage from './components/Common/NotFound';


// import Footer from './components/Common/Footer';
// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class CustomRoutes extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact={true} path="/" component={Homepage} />
          <Route exact={true} path="/find-followers" component={FindFollowersPage} />
          <Route component={NotFoundPage} />
        </Switch>
        {/* <Footer/> */}
      </div>
    );
  }
}

export default CustomRoutes;
