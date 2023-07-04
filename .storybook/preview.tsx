import { DocsContainer, DocsContainerProps } from '@storybook/blocks'
import type { Preview } from "@storybook/vue3";
import DocumentationTemplate from './DocumentationTemplate.mdx'

import '../src/css/reset.styl'
import './preview.styl'

const preview: Preview = {
  parameters: {
    docs: {
      source: {
        transform: (code, storyContext) => {
          if (code.trim().startsWith('{')) {
            code = code
              .replace(/decorators: \[[\s\S]*?],\n/, '')
              .replace(/render: \(\) => \(\{/, '')
              .replace(/}\)\n\s*}$/, '}')
              .replace(/(?:\s{4})?components: \{[\s\S]*?},\n/, '')
          } else {
            code = code.replace(/v-bind="[\s\S]+?"/, '')
              .replaceAll(/<template v-if=".+?" #/g, '<template #')
              .replaceAll(/<template #(\w+?)>\{\{args.\1(?:Slot)?}}<\/template>/g, '')
              .replaceAll(/<template #(\w+?) \/>/g, '')
              .replaceAll(/:(\w+?)="'(.*?)'"/g, '$1="$2"')
          }
          code = code.replaceAll(/^\s*$/gm, '').replaceAll(/\n+/g, '\n')

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
