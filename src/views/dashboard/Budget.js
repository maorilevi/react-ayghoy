import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

import {
  Avatar,
  Box,
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

const Budget = ({data, className, ...rest }) => {
  const classes = useStyles();
  const cardStyle = {
    background: data.isRouter ? '#fff' : data.color
  };
  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}>
      <CardContent
          style={cardStyle}>
        <Grid
          container
          justify="space-between"
          spacing={3}>
          <Grid item>
            {

                data.isRouter ? <RouterLink to="/app/feature">
                        <Typography
                        color="textSecondary"
                        gutterBottom
                        variant="h6">
                        {data.title}
                        </Typography>
                        <Typography
                        color="textPrimary"
                        variant="h1">
                        {data.count}
                        </Typography>
                      </RouterLink> : null
            }
              <Typography
              color="textSecondary"
              gutterBottom
              variant="h6">{data.title}</Typography><Typography color="textPrimary" variant="h1">{data.count}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

Budget.propTypes = {
  className: PropTypes.string
};

export default Budget;
