import React from 'react';
import Pages from '../../Pages';
import { Button, createStyles, makeStyles, Theme } from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { Link } from 'react-router-dom';

const styles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      textDecoration: 'none',
    },
    icon: {
      paddingRight: `${theme.spacing(0.5)}px`,
    },
    button: {
      fontWeight: 600,
    },
  })
);

const ReturnTopButton = (): JSX.Element => {
  const classes = styles();
  return (
    <Link to={Pages.index} className={classes.link}>
      <Button className={classes.button}>
        <NavigateBeforeIcon className={classes.icon} />
        トップに戻る
      </Button>
    </Link>
  );
};

export default ReturnTopButton;
