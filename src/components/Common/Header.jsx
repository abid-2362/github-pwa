import React, { Component } from 'react';
import { withRouter, NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { bindActionCreators } from "redux";
// import * as loginActions from '../../actions/LoginActions';
// import LoginPage from '../LoginPage/LoginPageContainer';
// import SelectRegisterType from '../RegisterPage/SelectRegisterType';
// import $ from 'jquery';

class Header extends Component {
  state = {
    // registerDialogOpen: false,
    // loginDialogOpen: false,
    // authenticated: this.props.authenticated,
  };

  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <a className="navbar-brand" href="#">Github PWA</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto navbar-right">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/find-followers">Find Users</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  history: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    // authenticated: state.session.authenticated,
    // user: state.session.user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // actions: bindActionCreators(loginActions, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));