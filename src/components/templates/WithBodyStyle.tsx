import React, { FC, useEffect } from 'react';

type Props = {
  bodyClassName: string;
};

const WithBodyStyle: FC<Props> = (props): JSX.Element => {
  const { bodyClassName, children } = props;
  useEffect(() => {
    document.body.className = bodyClassName;
    return () => {
      document.body.className = '';
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return <>{children}</>;
};

export default WithBodyStyle;
