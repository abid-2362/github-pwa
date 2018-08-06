import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import FindFollowers from './FindFollowers';
import * as getFollowersActions from '../../actions/getFollowersActions';
// import $ from 'jquery';
class FindFollowersContainer extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    username: '',
    followers: [],
    loading: false,
    offline: false,
  }

  // WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    if(nextProps.followers) {
      this.setState({followers: nextProps.followers, loading: false});
    }
  }

  // static getDerivedStateFromProps(props, state) {
  //   // console.log('getDerivedStateFromProps',props);
  //   if(props.followers) {
  //     // this.setState({followers: nextProps.followers, loading: false});
  //     return {
  //       followers: props.followers, loading: false
  //     };
  //   }
  //   return {
  //     loading: false
  //   };
  // }

  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let state = this.state;
    state[name] = value;
    this.setState(state);
  }

  handleSubmit = () => {
    this.setState({loading: true});
    this.props.actions.getFollowers(this.state.username);
  }

  render() {
    return (
      <FindFollowers
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        state={this.state}
      />
    );
  }
}


FindFollowersContainer.propTypes = {
  followers: PropTypes.array,
  actions: PropTypes.object,
}

function mapStateToProps(state, ownProps) {
  return {
    followers: state.followers,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(getFollowersActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FindFollowersContainer);
