import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { FC, useEffect } from 'react';

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
  useEffect(() => {
    document.body.className = classes.body;
    return () => {
      document.body.className = '';
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return <>{children}</>;
};

export default OnePageTemplate;
