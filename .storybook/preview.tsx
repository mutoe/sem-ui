import { DocsContainer, DocsContainerProps } from '@storybook/blocks'
import type { Preview } from "@storybook/vue3";

const preview: Preview = {
  parameters: {
    docs: {
      source: {
        transform: (code, storyContext) => {
          code = code.replace(/v-bind=".*?"/, '')
            .replaceAll(/<template #(\w*?)>\{\{args.\1(?:Slot)?}}<\/template>/g, '')
            .replaceAll(/<template #(\w*?) \/>/g, '')
          return code
        }
      }
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      sort: {}
    },
  },
};


export default preview;
