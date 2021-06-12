import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import React, { FC } from 'react';

type Props = {
  name: string;
  date: string;
};

const styles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: `${theme.spacing(1)}px 0`,
    },
    name: {
      width: '5em',
      fontSize: '1.2em',
      display: 'inline-block',
      padding: `0 ${theme.spacing(1)}px`,
    },
    date: {
      fontSize: '1em',
      display: 'inline-block',
      padding: `0 ${theme.spacing(1)}px`,
    },
    children: {
      fontSize: '1em',
      padding: `${theme.spacing(1)}px 0`,
    },
  })
);

const LanguageContent: FC<Props> = (props): JSX.Element => {
  const { name, date, children } = props;
  const classes = styles();
  return (
    <div className={classes.container}>
      <div>
        <Typography className={classes.name}>{name}</Typography>
        <Typography className={classes.date}>{date}</Typography>
      </div>
      <div className={classes.children}>
        <Typography>{children}</Typography>
      </div>
    </div>
  );
};

export default LanguageContent;
