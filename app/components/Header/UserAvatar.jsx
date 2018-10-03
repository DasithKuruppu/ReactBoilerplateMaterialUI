import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons
import green from '@material-ui/core/colors/green';
import Person from '@material-ui/icons/Person';
const styles = {
  avatar: {
    margin: 10,
  },
  greenAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: green[500],
  },
};
function IconAvatars(props) {
  const { classes } = props;
  return (
    <Avatar className={classes.greenAvatar} sizes="small">
      <Person />
    </Avatar>
  );
}
IconAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconAvatars);
