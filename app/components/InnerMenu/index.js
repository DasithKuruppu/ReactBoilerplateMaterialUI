/**
 *
 * InnerMenu
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import AlarmIcon from '@material-ui/icons/Alarm';
import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/AddCircleOutline';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Add from '@material-ui/icons/Add';
import Divider from '@material-ui/core/Divider';
import SearchBar from '../SearchBar';
import Button from '../CustomButtons/Button';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
const styles = theme => ({
  paper: {
    color: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: 'row',
  },
  paddedPaper: {
    color: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    padding: '5px',
  },
  filterBar: {
    color: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: 'row',
    margin: '2px',
  },
  text: {
    marginRight: '5px',
  },
  strippedButton: {
    padding: 0,
    margin: 0,
    marginLeft: '5px',
    height: '32px',
    minWidth: '32px',
    width: '32px',
  },
});

function InnerMenu(props) {
  const { classes } = props;
  return (
    <div>
      {/* <FormattedMessage {...messages.header} /> */}
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <div className={classes.paper}>
            <SearchBar
              onChange={() => console.log('onChange')}
              onRequestSearch={() => console.log('onRequestSearch')}
              style={{
                margin: '2px',
                width: '100%',
                height: '40px',
                alignSelf: 'center',
              }}
            />
            <Button color="info">
              <Add />
              task
            </Button>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.filterBar}>
            <div className={classes.paddedPaper}>
              <Chip
                label="undone tasks"
                color="primary"
                onDelete={() => {
                  console.log(this);
                }}
                icon={<AlarmIcon />}
                variant="outlined"
              />
              <Button
                color="info"
                justIcon
                round
                className={classes.strippedButton}
              >
                <Add />
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
      <Divider />
    </div>
  );
}

InnerMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InnerMenu);
