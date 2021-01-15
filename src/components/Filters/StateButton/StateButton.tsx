import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Icon } from '../../Icon';
import { IconTypes } from '../../Icon/Icon.enums';
import { Text } from '../../typography/Text';
import { FlexContainer } from '../../FlexContainer';
import {
  getBorderRadius,
  getColor,
  getDepth,
  pxToRem,
} from '../../../utils/helpers';
import { StateButtonProps } from './StateButton.types';
import { useStateButtonIcon } from '../hooks/useStateButton';

const Popup = styled(FlexContainer)`
  position: absolute;
  visibility: hidden;
  z-index: ${getDepth('tooltip')};
  padding: ${pxToRem(8.5, 0, 8.5, 10)};
  background: ${getColor('strawberry')};
  border-radius: ${getBorderRadius} 0 0 ${getBorderRadius};
  opacity: 0;
  right: calc(100%);
  top: 50%;
  transform: translateY(-50%);
`;

const RemoveButton = styled(FlexContainer)`
  position: relative;
  padding: ${pxToRem(8, 5.5)};
  cursor: pointer;
  &:hover {
    background-color: ${getColor('strawberry')};
    border-radius: 0 ${getBorderRadius} ${getBorderRadius} 0;
  }
  &:hover ${Popup} {
    visibility: visible;
    opacity: 1;
  }
`;

const LightText = styled(Text)`
  color: ${getColor('graphite5H')};
  line-height: ${pxToRem(15)};
  font-weight: 500;
`;

const StateButton: React.FC<StateButtonProps> = ({
  id,
  onClick,
  isFilterApplied = false,
}) => {
  const {
    iconColor,
    iconName,
    handleMouseOut,
    handleMouseOver,
  } = useStateButtonIcon(isFilterApplied);
  return (
    <RemoveButton
      alignItems="center"
      as="button"
      justifyContent="center"
      onClick={() => onClick(id)}
      onMouseOut={handleMouseOut}
      onMouseOver={handleMouseOver}
    >
      <Icon
        color={iconColor}
        name={iconName}
        type={IconTypes.ssc}
        hasFixedWidth
      />
      <Popup alignItems="center" justifyContent="center">
        <LightText>Remove</LightText>
      </Popup>
    </RemoveButton>
  );
};

export default StateButton;

StateButton.propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isFilterApplied: PropTypes.bool,
};
