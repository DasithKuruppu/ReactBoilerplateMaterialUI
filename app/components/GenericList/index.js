/**
 *
 * GenericList
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AlarmIcon from '@material-ui/icons/Alarm';
import blueColor from '@material-ui/core/colors/blue';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import taskList from './taskList';
const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: blueColor[500],
  },
});

function GenericList(props) {
  const { classes } = props;
  return (
    <div>
      {/* <FormattedMessage {...messages.header} /> */}
      <List dense={false}>
        {taskList.map(task => (
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.orangeAvatar}>
                <AlarmIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={task.title} secondary={task.description} />
            <ListItemSecondaryAction>
              <IconButton aria-label="Edit">
                <EditIcon />
              </IconButton>
              <IconButton aria-label="Delete">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

GenericList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GenericList);
