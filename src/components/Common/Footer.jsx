import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: {},
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({settings: nextProps.settings});
  }

  render() {
    let { settings } = this.state;
    return (
      <section id="footer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
              <h4>{settings.orgName ? settings.orgName : ''}</h4>
              <p>
                {settings.orgDescription ? settings.orgDescription : ''}
              </p>
            </div>
            <div className="col-12 col-md-4">
              <h4>{settings.contactHeading ? settings.contactHeading : ''}</h4>
              <address>
                {settings.contactAddress ? settings.contactAddress : ''}
              </address>
              <p>Email: {settings.contactEmail ? settings.contactEmail : ''}</p>
              <p>Phone: {settings.contactPhone ? settings.contactPhone : ''}</p>
            </div>
            <div className="col-12 col-md-4">
              <h4>{settings.thirdColumnHeading ? settings.thirdColumnHeading : ''}</h4>
              <p>
                {settings.thirdColumnText ? settings.thirdColumnText : ''}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
Footer.propTypes = {
  settings: PropTypes.object
};

function mapStateToProps(state) {
  return {
    settings: state.admin.siteSettings  //containing all the information related to the admin
  }
}

export default connect(mapStateToProps)(Footer);