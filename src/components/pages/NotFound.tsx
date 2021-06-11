import React from 'react';
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import OnePageVHCenterTemplate from '../templates/OnePageVHCenterTemplate';
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

const NotFound = (): JSX.Element => {
  const classes = styles();
  return (
    <OnePageVHCenterTemplate className={classes.container}>
      <Typography className={classes.title}>404</Typography>
      <Typography variant="body1" className={classes.description}>
        ページが見つかりませんでした
      </Typography>
      <ReturnTopButton />
    </OnePageVHCenterTemplate>
  );
};

export default NotFound;
