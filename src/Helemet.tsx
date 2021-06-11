import React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';
import GeneralTheme from './GeneralTheme';
import Static from './Static';

const WebSiteURL = 'https://s7a.dev';
const PageTitle = "sya-ri's Portfolio";

const Helmet = (): JSX.Element => (
  <ReactHelmet>
    {/* Favicon https://www.favicon-generator.org/ */}
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href={Static.AppleTouchIconPng}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href={Static.Favicon32x32Png}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href={Static.Favicon16x16Png}
    />
    <link rel="manifest" href={'/site.webmanifest'} />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta
      name="theme-color"
      content={GeneralTheme.palette.background.default}
    />

    {/* Google Font */}
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link // For components/Index.tsx : userName
      href="https://fonts.googleapis.com/css2?family=Nunito&display=swap&text=sya_ri"
      rel="stylesheet"
    />

    {/* Open Graph Protocol */}
    <meta property="og:url" content={WebSiteURL} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={PageTitle} />
    <meta property="og:image" content={WebSiteURL + Static.Icon1200x630Png} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@fly_in_pig" />
    <meta name="twitter:title" content={PageTitle} />
    <meta name="twitter:image" content={WebSiteURL + Static.Icon1200x630Png} />

    {/* General */}
    <title>{PageTitle}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    {/* Debug Tag */}
    <meta name="commit_hash" content={COMMIT_HASH} />
  </ReactHelmet>
);

export default Helmet;
