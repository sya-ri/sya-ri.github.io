import React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';
import GeneralTheme from './GeneralTheme';

const Helmet = (): JSX.Element => (
  <ReactHelmet>
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href={'/apple-touch-icon.png'}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href={'/favicon-32x32.png'}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href={'/favicon-16x16.png'}
    />
    <link rel="manifest" href={'/site.webmanifest'} />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta
      name="theme-color"
      content={GeneralTheme.palette.background.default}
    />
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link // For components/Index.tsx : userName
      href="https://fonts.googleapis.com/css2?family=Nunito&display=swap&text=sya_ri"
      rel="stylesheet"
    />
    <title>sya-ri</title>
  </ReactHelmet>
);

export default Helmet;
