import React, { FC } from 'react';
import { Button, ButtonProps, Icon } from '@chakra-ui/react';
import { FaAngleLeft } from 'react-icons/fa';
import { Link as RouterDomLink } from 'react-router-dom';
import * as Paths from '../../Paths';

const ReturnToTop: FC<ButtonProps> = (props) => (
  <Button bg="white" size="sm" {...props} as={RouterDomLink} to={Paths.Index}>
    <Icon as={FaAngleLeft} pr={2} />
    トップに戻る
  </Button>
);

export default ReturnToTop;
