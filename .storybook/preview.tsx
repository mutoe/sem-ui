import { DocsContainer, DocsContainerProps } from '@storybook/blocks'
import type { Preview } from "@storybook/vue3";
import DocumentationTemplate from './DocumentationTemplate.mdx'

const preview: Preview = {
  parameters: {
    docs: {
      page: DocumentationTemplate,
      source: {
        transform: (code, storyContext) => {
          code = code.replace(/v-bind=".+?"/, '')
            .replaceAll(/<template #(\w+?)>\{\{args.\1(?:Slot)?}}<\/template>/g, '')
            .replaceAll(/<template #(\w+?) \/>/g, '')
            .replaceAll(/:(\w+?)="'(.*?)'"/g, '$1="$2"')
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
