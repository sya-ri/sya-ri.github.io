import React, { FC } from 'react';
import { createStyles, makeStyles } from '@material-ui/core';
import OnePageTemplate from './OnePageTemplate';
import clsx from 'clsx';

export type Props = {
  className?: string;
};

const styles = makeStyles(() =>
  createStyles({
    vhCenter: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translateY(-50%) translateX(-50%)',
    },
  })
);

const OnePageVHCenterTemplate: FC<Props> = (props) => {
  const { className, children } = props;
  const classes = styles();
  return (
    <OnePageTemplate>
      <div className={clsx(classes.vhCenter, className)}>{children}</div>
    </OnePageTemplate>
  );
};

export default OnePageVHCenterTemplate;
