import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { FC } from 'react';
import WithBodyStyle from './WithBodyStyle';

const styles = makeStyles((theme: Theme) =>
  createStyles({
    body: {
      overflow: 'hidden',
      backgroundColor: theme.palette.background.default,
      width: '100vw',
      height: '100vh',
      padding: 0,
      margin: 0,
    },
  })
);

const OnePageTemplate: FC = (props): JSX.Element => {
  const { children } = props;
  const classes = styles();
  return <WithBodyStyle bodyClassName={classes.body}>{children}</WithBodyStyle>;
};

export default OnePageTemplate;
