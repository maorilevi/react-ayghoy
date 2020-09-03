import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

import {
  Card,
  CardContent,
  Grid,
  Typography,
  colors,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.red[600],
    height: 56,
    width: 56
  },
  differenceIcon: {
    color: colors.red[900]
  },
  differenceValue: {
    color: colors.red[900],
    marginRight: theme.spacing(1)
  }
}));
function cardBody(data) {
  const titleColor = {
    color: data.color,
    fontSize: '30px',
    textAlign: 'center',
    width: '100%'
  };
  const gridStyle = {
    width: '100%'
  };
  const redirectGridStyle = {
    width: '100%',
    background: '#9c98e7'
  }
  const counterStyle = {
    textAlign: 'center',
    width: '100%',
    fontSize: '50px',
    fontWeight: '900',
    borderTop: '2px solid lightgray',
    color: '#7b7b7b',
    paddingTop: '12px'
  };
  const counterStyleRedirect = {
    textAlign: 'center',
    width: '100%',
    fontSize: '50px',
    fontWeight: '900',
    borderTop: '2px solid lightgray',
    color: 'rgb(255, 255, 255)',
    paddingTop: '12px'
  };
  const redirectStyle = {

    color: 'rgb(255, 255, 255)',
    fontSize: '30px',
    textAlign: 'center',
    width: '100%',
    fontFamily: 'sans-serif',
    fontWeight: '100',
    whiteSpace: 'pre',
    alignSelf: 'center'
  };
  if(data.isRouter) {
    return <Grid
        style={redirectGridStyle}
        item><RouterLink to="/app/feature">
      <Typography
          style={redirectStyle}
          color="textSecondary"
          gutterBottom
          variant="h6">
        FEATURE SCREEN
      </Typography>
      <Typography
          style={counterStyleRedirect}
          color="textPrimary"
          variant="h1">GOT TO FEATURE</Typography>
    </RouterLink></Grid>
  } else {
    return <Grid
        style={gridStyle}
        item>
      <Typography
          style={titleColor}
          color="textSecondary"
          gutterBottom
          variant="h6">
        {data.title}
      </Typography>
      <Typography
          style={counterStyle}
          color="textPrimary"
          variant="h1">{data.count}</Typography></Grid>;
  }

};
const Budget = ({data, className, ...rest }) => {
  const classes = useStyles();
  return (
      <Card
          style={data.isRouter ? {background: '#9c98e7'} : {}}
          className={clsx(classes.root, className)}
          {...rest}>
        <CardContent>
          <Grid
              container
              justify="space-between">
            {
              cardBody(data)
            }
          </Grid>
        </CardContent>
      </Card>
  );
};

Budget.propTypes = {
  className: PropTypes.string
};

export default Budget;
