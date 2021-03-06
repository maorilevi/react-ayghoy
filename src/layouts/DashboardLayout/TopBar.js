import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import Logo from '../../components/Logo';


const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    width: 60,
    height: 60
  },
  routerLink: {
    color: 'white',
    fontSize: '18px',
    fontweight: '100',
    fontFamily: 'arial',
    margin: '0 20px',
  }
}));

const TopBar = ({className, onMobileNavOpen, cards,isDashboard, ...rest}) => {
  const classes = useStyles();
  const [notifications] = useState([]);
  const cardStyle = {
    width: '229px',
    fontFamily: 'sans-serif',
    padding: '10px 40px',
    background: '#9c98e7',
    borderRadius: '3px',
    margin: '0 5px',
    fontWeight: '700',
    cursor:'pointer'
  }
  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={0}
      {...rest}
    >
      <Toolbar>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <RouterLink  className={classes.routerLink} to="dashboard">
          Dashboard
        </RouterLink>
        <RouterLink  className={classes.routerLink} to="feature">
          feature
        </RouterLink>
        {
          !!cards && !isDashboard ? <Box className={'widgetClass'}>
            <Hidden only={['sm', 'xm']} >
              <span style={cardStyle}>{cards[0].title} ({cards[0].count})</span>
              <span style={cardStyle}>{cards[1].title} ({cards[1].count})</span>
            </Hidden>
          </Box> : null
        }
        <Box flexGrow={1} />
        <Hidden mdDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onMobileNavOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func,
  cards: PropTypes.object
};

export default TopBar;

