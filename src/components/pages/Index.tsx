import React from 'react';
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import OnePageTemplate from '../templates/OnePageTemplate';

const styles = makeStyles((theme: Theme) =>
  createStyles({
    iconContainer: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translateY(-50%) translateX(-50%)',
      textAlign: 'center',
      padding: `${theme.spacing(2)}px`,
      boxShadow: '0 0 5px 3px rgba(0, 0, 0, 0.2)',
      marginBottom: `${theme.spacing(2)}px`,
      borderRadius: `${theme.spacing(2)}px`,
      backgroundColor: theme.palette.background.paper,
    },
    icon: {
      width: '14em',
    },
    name: {
      fontFamily: "'Nunito', sans-serif",
      fontSize: '2em',
    },
  })
);

const Index = (): JSX.Element => {
  const classes = styles();
  return (
    <OnePageTemplate>
      <div className={classes.iconContainer}>
        <img src={'/icon.png'} alt="Icon" className={classes.icon} />
        <Typography className={classes.name}>sya_ri</Typography>
      </div>
    </OnePageTemplate>
  );
};

export default Index;
