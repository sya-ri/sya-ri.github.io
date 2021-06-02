import React from 'react';
import {
  Button,
  createStyles,
  Link,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import OnePageVHCenterTemplate from '../templates/OnePageVHCenterTemplate';
import PersonIcon from '@material-ui/icons/Person';
import LinkIcon from '@material-ui/icons/Link';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import Pages from '../../Pages';

const styles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      textAlign: 'center',
      padding: `${theme.spacing(2)}px`,
      boxShadow: '0 0 5px 3px rgba(0, 0, 0, 0.2)',
      marginBottom: `${theme.spacing(2)}px`,
      borderRadius: `${theme.spacing(2)}px`,
      backgroundColor: theme.palette.background.paper,
      width: 'calc(100% - 60px)',
      '@media(min-width: 360px)': {
        width: '300px',
      },
    },
    userIcon: {
      width: '150px',
      height: '150px',
    },
    userName: {
      fontFamily: "'Nunito', sans-serif",
      fontSize: '2em',
    },
    linkContainer: {
      display: 'flex',
      paddingTop: `${theme.spacing(2)}px`,
    },
    linkContent: {
      textDecoration: 'none',
      color: theme.palette.common.black,
    },
    linkButton: {
      display: 'grid',
      width: '100px',
    },
    linkIcon: {
      width: '2em',
      margin: 'auto',
    },
  })
);

const link = (href: string, caption: string, icon: JSX.Element) => {
  return { href, caption, icon };
};

const Index = (): JSX.Element => {
  const classes = styles();
  const links = [
    link(Pages.about, 'About', <PersonIcon />),
    link(Pages.works, 'Works', <BookmarkIcon />),
    link(Pages.links, 'Links', <LinkIcon />),
  ];
  return (
    <OnePageVHCenterTemplate className={classes.container}>
      <img src={'/icon.png'} alt="Icon" className={classes.userIcon} />
      <Typography className={classes.userName}>sya_ri</Typography>
      <div className={classes.linkContainer}>
        {links.map(({ href, caption, icon }) => (
          <Link href={href} className={classes.linkContent} key={href}>
            <Button className={classes.linkButton}>
              <div className={classes.linkIcon}>{icon}</div>
              <Typography variant="caption">{caption}</Typography>
            </Button>
          </Link>
        ))}
      </div>
    </OnePageVHCenterTemplate>
  );
};

export default Index;
