import {
  Button,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import OnePageVHCenterTemplate from '../templates/OnePageVHCenterTemplate';
import React from 'react';
import Pages from '../../Pages';
import { NavigateBefore } from '@material-ui/icons';

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
    backTopLink: {
      textDecoration: 'none',
    },
    backTopIcon: {
      paddingRight: `${theme.spacing(0.5)}px`,
    },
    backTopContent: {
      fontWeight: 600,
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
      <Link to={Pages.index} className={classes.backTopLink}>
        <Button className={classes.backTopContent}>
          <NavigateBefore className={classes.backTopIcon} />
          トップに戻る
        </Button>
      </Link>
    </OnePageVHCenterTemplate>
  );
};

export default NotFound;
