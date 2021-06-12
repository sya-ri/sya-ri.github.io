import React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';

const Helmet = (): JSX.Element => (
  <ReactHelmet>
    <meta name="commit_hash" content={COMMIT_HASH} />
  </ReactHelmet>
);

export default Helmet;
