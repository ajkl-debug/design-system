import React from 'react';
import PropTypes from 'prop-types';

import { Inline } from '../layout';
import { SpaceSizes } from '../../theme';
import { Button, ButtonEnums } from '../Button';
import * as CustomPropTypes from '../../types/customPropTypes';
import {
  AbsoluteLinkActionKind,
  ActionKindsPropType,
  RelativeLinkActionKind,
} from '../../types/action.types';
import { CardActionsProps } from './Card.types';
import { CardContainer } from './Card';

const CardActions = React.forwardRef<HTMLDivElement, CardActionsProps>(
  ({ actions, rightAdornment = null }, ref) => (
    <CardContainer
      horizontalPadding={SpaceSizes.mdPlus}
      verticalPadding={SpaceSizes.sm}
    >
      <Inline
        ref={ref}
        align="center"
        gap={SpaceSizes.mdPlus}
        justify="space-between"
      >
        <Inline gap={SpaceSizes.mdPlus}>
          {actions.map((action) => (
            <Button
              key={action.name}
              href={(action as AbsoluteLinkActionKind<[React.MouseEvent]>).href}
              to={(action as RelativeLinkActionKind<[React.MouseEvent]>).to}
              variant={ButtonEnums.ButtonVariants.text}
              onClick={action.onClick}
            >
              {action.label}
            </Button>
          ))}
        </Inline>
        {rightAdornment}
      </Inline>
    </CardContainer>
  ),
);

CardActions.propTypes = {
  actions: CustomPropTypes.tuple(ActionKindsPropType, ActionKindsPropType),
  rightAdornment: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

export default CardActions;
