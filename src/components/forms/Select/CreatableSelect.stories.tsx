import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { isNull } from 'ramda-adjunct';
import { GroupedOptionsType, OptionsType } from 'react-select';

import { CreatableSelectProps, Option } from './Select.types';
import CreatableSelect from './CreatableSelect';

export default {
  title: 'components/forms/Select/CreatableSelect',
  component: CreatableSelect,
  parameters: {
    docs: {
      description: {
        component: `
\`\`\`js
import { CreatableSelect } from '@securityscorecard/design-system';
\`\`\`

Capabilities of the **CreatableSelect** component are the same as [Select](design-system/alpha/components-forms-select-select--playground) component
with a couple of properties specific for the options creation.
      `,
      },
    },
  },
  argTypes: {
    options: {
      table: {
        type: {
          detail: `
[
  {
    label: string,
    value: string,
    isDisabled?: boolean,
  }

  OR

  {
    label: string,
    options: {
      label: string,
      value: string,
      isDisabled?: boolean,
    }
  }
]
          `,
        },
      },
    },
    defaultValue: {
      table: {
        type: {
          detail: `
{
  label: string,
  value: string,
  isDisabled?: boolean,
}

OR

[
  {
    label: string,
    value: string,
    isDisabled?: boolean,
  }
]
          `,
        },
      },
    },
    onCreateOption: {
      table: { type: { summary: '(inputValue: string) => void' } },
    },
    isLoading: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    isMulti: {
      table: { defaultValue: { summary: 'false' } },
    },
    defaultIsMenuOpen: {
      table: { defaultValue: { summary: 'false' } },
    },
  },
} as Meta;

const CreatableSelectTemplate: Story<CreatableSelectProps<true>> = ({
  options: originalOptions,
  ...args
}) => {
  const [createdOptions, setCreatedOptions] = useState(originalOptions);
  const [currentValue, setCurrentValue] = useState(null);
  const [isCreating, setIsCreating] = useState(false);

  const handleCreateOption = (inputString) => {
    setIsCreating(true);
    const newOption: Option = {
      label: inputString,
      value: inputString.toLowerCase().replace(/\W/g, ''),
    };

    setTimeout(() => {
      setCreatedOptions(
        (prevState) =>
          [...prevState, newOption] as
            | GroupedOptionsType<Option>
            | OptionsType<Option>,
      );
      setCurrentValue((prevValue) =>
        isNull(prevValue) ? [newOption] : [...prevValue, newOption],
      );
      setIsCreating(false);
    }, 500);
  };

  return (
    <CreatableSelect
      {...args}
      createNewLabel="Create new option"
      isLoading={isCreating}
      options={createdOptions}
      value={currentValue}
      onChange={(value) => setCurrentValue(value)}
      onCreateOption={handleCreateOption}
    />
  );
};

export const Playground = CreatableSelectTemplate.bind({});

Playground.args = {
  options: [
    { value: 'HR', label: 'Croatia', isDisabled: true },
    { value: 'CU', label: 'Cuba' },
    { value: 'CW', label: 'Cura\u00e7ao' },
    { value: 'CY', label: 'Cyprus' },
    { value: 'CZ', label: 'Czech Republic' },
    { value: 'DK', label: 'Denmark' },
  ],
  defaultIsMenuOpen: true,
  isClearable: true,
  isMulti: true,
  isMenuPositionRelative: true,
  defaultInputValue: 'd',
};

export const SingleSelect = CreatableSelectTemplate.bind({});

SingleSelect.args = {
  ...Playground.args,
  isMulti: false,
};
