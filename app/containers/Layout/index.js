/**
 *
 * Layout
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Header from 'components/Header/Header';
import HeaderLinks from 'components/Header/HeaderLinks';
import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLayout from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const styles = () => ({
  paper: {
    maxWidth: '1200px',
    margin: 'auto',
    paddingLeft: '20px',
    paddingRight: '20px',
  },
});

function Layout({ dispatch, children, layout,classes }) {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Header
          color="dark"
          brand="MeeDoo"
          fixed
          rightLinks={<HeaderLinks />}
        />
        {/* <FormattedMessage {...messages.header} /> */}
        <Paper className={classes.paper}>{children}</Paper>
      </Grid>
    </Grid>
  );
}

Layout.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.any,
  layout: PropTypes.object,
  classes: PropTypes.object,
};
const StyledLayout = withStyles(styles)(Layout);

const mapStateToProps = createStructuredSelector({
  layout: makeSelectLayout(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'layout', reducer });
const withSaga = injectSaga({ key: 'layout', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(StyledLayout);
