import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { DropdownProps } from './Dropdown.types';
import DropdownPane from './DropdownPane';
import { ActionKindsPropType } from '../types/Action.types';

const DropdownWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const Dropdown: React.FC<DropdownProps> = ({
  actions,
  defaultIsOpen = false,
  children,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);

  return (
    <DropdownWrapper className={className} onClick={() => setIsOpen(!isOpen)}>
      {children}
      {isOpen && (
        <DropdownPane actions={actions} onClickOut={() => setIsOpen(false)} />
      )}
    </DropdownWrapper>
  );
};

Dropdown.propTypes = {
  actions: PropTypes.arrayOf(ActionKindsPropType).isRequired,
  defaultIsOpen: PropTypes.bool,
  className: PropTypes.string,
};

export default Dropdown;