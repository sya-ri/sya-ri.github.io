import OnePageVHCenterTemplate from '../templates/OnePageVHCenterTemplate';
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';
import ReturnTopButton from '../organisms/ReturnTopButton';

const styles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      textAlign: 'center',
      width: 'calc(100% - 20px)',
      '@media(min-width: 420px)': {
        width: '400px',
      },
    },
    title: {
      fontSize: '8em',
      fontWeight: 600,
      lineHeight: 1,
    },
    description: {
      padding: `${theme.spacing(2)}px 0`,
    },
  })
);

const NotImplement = (): JSX.Element => {
  const classes = styles();
  return (
    <OnePageVHCenterTemplate className={classes.container}>
      <Typography className={classes.title}>503</Typography>
      <Typography variant="body1" className={classes.description}>
        実装されていないページです
      </Typography>
      <ReturnTopButton />
    </OnePageVHCenterTemplate>
  );
};

export default NotImplement;
