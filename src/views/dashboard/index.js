import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from '../../components/Page';
import Budget from './Budget';
import Sales from './Sales';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  const budgets = [{
    title: 'a',
    isRouter: false,
    count: 200,
    fontColor: '#fff',
    color: '#4361a0'
  },{
    title: 'b',
    count: 200,
    isRouter: false,
    fontColor: '#fff',
    color: '#ecb63c'
  },{
    title: 'to feature',
    count: null,
    fontColor: '#000',
    isRouter: true,
    routerTo: 'feature',
    color: null
  }];
  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          {
            budgets.map(b => {
              return <Grid item lg={4} sm={6} xl={4} xs={12}>
                <Budget data={b}/>
              </Grid>
            })
          }
          <Grid item lg={12} md={12} xl={12} xs={12}>
            <Sales barData={[{color: budgets[0].color}, {color: budgets[1].color}]}/>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
