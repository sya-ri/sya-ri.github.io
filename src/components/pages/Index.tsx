import React from 'react';
import {
  Button,
  createStyles,
  IconButton,
  Link,
  makeStyles,
  Theme,
  Tooltip,
  Typography,
} from '@material-ui/core';
import OnePageVHCenterTemplate from '../templates/OnePageVHCenterTemplate';
import PersonIcon from '@material-ui/icons/Person';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import Pages from '../../Pages';
import Static from '../../Static';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

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
    externalLinkContainer: {
      padding: `${theme.spacing(1)}px 0`,
    },
    externalLinkIcon: {
      margin: `0 ${theme.spacing(1)}px`,
    },
    pageLinkContainer: {
      display: 'flex',
      borderTop: 'dashed 1px',
      paddingTop: `${theme.spacing(1)}px`,
    },
    pageLinkContent: {
      textDecoration: 'none',
      color: theme.palette.common.black,
    },
    pageLinkButton: {
      display: 'grid',
      width: '100px',
    },
    pageLinkIcon: {
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
  const externalLinks = [
    link('https://twitter.com/fly_in_pig', 'Twitter', <TwitterIcon />),
    link('https://github.com/sya-ri', 'GitHub', <GitHubIcon />),
  ];
  const pageLinks = [
    link(Pages.about, 'About', <PersonIcon />),
    link(Pages.works, 'Works', <BookmarkIcon />),
    link(Pages.speaks, 'Speaks', <LibraryBooksIcon />),
  ];
  return (
    <OnePageVHCenterTemplate className={classes.container}>
      <img src={Static.IconPng} alt="Icon" className={classes.userIcon} />
      <Typography className={classes.userName}>sya_ri</Typography>
      <div className={classes.externalLinkContainer}>
        {externalLinks.map((link) => (
          <Tooltip title={link.caption} key={link.href}>
            <IconButton
              href={link.href}
              target="_blank"
              color="primary"
              className={classes.externalLinkIcon}
            >
              {link.icon}
            </IconButton>
          </Tooltip>
        ))}
      </div>
      <div className={classes.pageLinkContainer}>
        {pageLinks.map(({ href, caption, icon }) => (
          <Link href={href} className={classes.pageLinkContent} key={href}>
            <Button className={classes.pageLinkButton}>
              <div className={classes.pageLinkIcon}>{icon}</div>
              <Typography variant="caption">{caption}</Typography>
            </Button>
          </Link>
        ))}
      </div>
    </OnePageVHCenterTemplate>
  );
};

export default Index;
