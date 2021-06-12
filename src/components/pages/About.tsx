import React from 'react';
import WithBodyStyle from '../templates/WithBodyStyle';
import {
  createStyles,
  Link,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import ReturnTopButton from '../organisms/ReturnTopButton';
import LanguageContent from '../organisms/about/LanguageContent';

const styles = makeStyles((theme: Theme) =>
  createStyles({
    body: {
      backgroundColor: theme.palette.background.default,
    },
    container: {
      textAlign: 'center',
      padding: `${theme.spacing(2)}px`,
      boxShadow: '0 0 5px 3px rgba(0, 0, 0, 0.2)',
      margin: 'auto',
      marginBottom: `${theme.spacing(2)}px`,
      borderRadius: `${theme.spacing(2)}px`,
      backgroundColor: theme.palette.background.paper,
      width: 'calc(100% - 40px)',
      '@media(min-width: 840px)': {
        width: '800px',
      },
    },
    pageWidth: {
      fontSize: '2em',
      fontWeight: 500,
      display: 'inline-block',
      borderBottom: 'solid 2px',
      padding: `0 16px`,
    },
    pageHeader: {
      padding: `${theme.spacing(2)}px 0`,
    },
    listContainer: {
      paddingTop: `${theme.spacing(2)}px`,
    },
    listTitle: {
      fontSize: '1.5em',
    },
    link: {
      textDecoration: 'underline',
    },
  })
);

const About = (): JSX.Element => {
  const classes = styles();
  return (
    <WithBodyStyle bodyClassName={classes.body}>
      <div className={classes.container}>
        <Typography className={classes.pageWidth}>About</Typography>
        <div className={classes.listContainer}>
          <Typography>綺麗なコードが好きです。</Typography>
        </div>
        <div className={classes.listContainer}>
          <Typography className={classes.listTitle}>Languages</Typography>
          <LanguageContent name="Kotlin" date="2018.11 - ">
            Minecraft Plugin を制作する中で実装力を養いました。
            サーバーサイドのフレームワークとして Ktor を主に使っています。
            また、Kotlin の可愛さを布教するために、
            <Link
              href="https://love-kotlin.connpass.com/"
              target="_blank"
              className={classes.link}
            >
              Kotlin 愛好会
            </Link>
            の運営としても活動しています。
          </LanguageContent>
          <LanguageContent name="TypeScript" date="2021.01 - ">
            React
            を使ったフロンドエンドをしています。始めたばかりなので誇るほどではありません。
          </LanguageContent>
          <LanguageContent name="C / C++" date="2018.04 - ">
            <Link
              href="https://official-robocon.com/kosen/"
              target="_blank"
              className={classes.link}
            >
              高専ロボコン
            </Link>
            でロボット制御をしていました。C++
            の機能を積極的に使い、開発の効率化をしていました。
          </LanguageContent>
        </div>
        <ReturnTopButton />
      </div>
    </WithBodyStyle>
  );
};

export default About;
