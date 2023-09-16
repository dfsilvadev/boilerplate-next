import React from 'react';

import type { Preview } from '@storybook/react';

import GlobalStyles from '../src/styles/global-styles';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    options: {
      storySort: {
        order: [
          'Introduction',
          'Pages',
          ['Home', 'Game'],
          'Brand',
          'Components',
          'Dropdown',
          'Form',
          'Icons',
          'Layout',
          'Navigation',
          'Slider',
          'Typography'
        ]
      },
      storyCategory: {
        open: false
      }
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [
    (Story) => (
      <>
        <GlobalStyles />
        <Story />
      </>
    )
  ]
};

export default preview;
