import React, { Component } from 'react';
// import PropTypes from "prop-types";
import { connect } from 'react-redux';
// import {bindActionCreators} from 'redux';
import Homepage from './Homepage';
// import * as listingActions from '../../actions/ListingActions';
// import $ from 'jquery';
class HomepageContainer extends Component {
  constructor(props) {
    super(props);
    // props.actions.loadAllListings();
  }
  state = {
    someValue: '',
  }

  render() {
    return (
      <Homepage />
    );
  }
}

HomepageContainer.propTypes = {
  // myProp: PropTypes.string.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    // someValue: state.someValue,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators(listingActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomepageContainer);
