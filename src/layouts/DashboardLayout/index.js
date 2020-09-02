import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import TopBar from './TopBar';
import Footer from "../Footer/footer";
import { connect } from 'react-redux'
import * as actions from "../../store/actions/DashboardBuilder";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 0
    }
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingBottom: '60px'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  }
}));

const DashboardLayout = (state) => {
  const classes = useStyles();
  const [setMobileNavOpen] = useState(false);
  state.onInitDashboard();
  return (
    <div className={classes.root}>
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} cards={state.cards}/>
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <Outlet />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cards: state.dashboard.cards,
    lineBar: state.dashboard.lineBar
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onInitDashboard: () => dispatch(actions.initDashboardData()),
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(DashboardLayout);
