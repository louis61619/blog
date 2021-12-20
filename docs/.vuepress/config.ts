import { path } from '@vuepress/utils'
import type { DefaultThemeOptions } from 'vuepress'
import { defineUserConfig } from 'vuepress'
import { mdPlugin } from './plugin'

export default defineUserConfig<DefaultThemeOptions>({
  title: `Louis's blog`,
  description: '這是一個web開發者的部落格',
  theme: path.resolve(__dirname, './theme'),
  base: '/blog/',
  extendsMarkdown: (md) => {
    md.use(mdPlugin)
  },
  themeConfig: {
    repo: 'https://github.com/louis61619/blog.git',
    navbar: [
      {
        text: '前端',
        children: [
          {
            text: 'javascript',
            link: '/front-end/javascript/this.md'
          },
          {
            text: 'react',
            link: '/front-end/react/'
          }
        ]
      }
    ],

    sidebar: {
      '/front-end/javascript': [
        '/front-end/javascript/this.md',
        '/front-end/javascript/arguments.md',
        '/front-end/javascript/call&apply&bind.md',

        '/front-end/javascript/functional-programming.md',
        '/front-end/javascript/object&prototype.md',
        '/front-end/javascript/prototype-chain&Inhertitance.md',

        '/front-end/javascript/strict-mode.md',
        '/front-end/javascript/supplement.md'
      ]
    }
  }
})
