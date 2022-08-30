import "../src/styles/index.css"
import { themes } from '@storybook/theming';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
  backgrounds: {
    default: 'Dark Mode',
    values: [
      { name: 'Dark Mode', value: '#1f2f7a' },
      { name: 'Light Mode', value: '#fff' },
    ],
  },
}