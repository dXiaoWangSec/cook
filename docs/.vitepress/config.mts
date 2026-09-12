import { defineConfig } from 'vitepress'
import { readdirSync } from 'node:fs'
import { extname, join, relative, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base = process.env.VITEPRESS_BASE ?? (repository ? `/${repository}/` : '/')

function getDocumentItems(directoryName: string) {
  const directory = fileURLToPath(new URL(`../${directoryName}/`, import.meta.url))

  return readdirSync(directory, {
    recursive: true,
    withFileTypes: true
  })
    .filter((entry) => entry.isFile() && extname(entry.name) === '.md' && entry.name !== 'index.md')
    .map((entry) => {
      const fullPath = join(entry.parentPath, entry.name)
      const documentPath = relative(directory, fullPath)
        .split(sep)
        .join('/')
        .replace(/\.md$/, '')

      return {
        text: entry.name.replace(/\.md$/, ''),
        link: `/${directoryName}/${documentPath}`
      }
    })
    .sort((a, b) => a.text.localeCompare(b.text, 'zh-CN'))
}

export default defineConfig({
  title: '一日三餐',
  description: '记录热菜、冷菜与日常厨房灵感',
  lang: 'zh-CN',
  base,
  cleanUrls: true,
  ignoreDeadLinks: [
    /\/condiment\//,
    /\/tips\//
  ],
  vite: {
    assetsInclude: ['**/*.JPG']
  },
  themeConfig: {
    logo: '🍳',
    siteTitle: '一日三餐',
    nav: [
      { text: '首页', link: '/' },
      { text: '早餐', link: '/breakfast/' },
      { text: '午餐', link: '/lunch/' },
      { text: '晚餐', link: '/dinner/' },
      { text: '炒菜', link: '/stir-fry/' },
      { text: '饮品', link: '/drinks/' },
      { text: '关于我', link: '/about/' }
    ],
    sidebar: {
      '/breakfast/': [
        {
          text: '早餐',
          items: [
            { text: '早餐首页', link: '/breakfast/' },
            ...getDocumentItems('breakfast')
          ]
        }
      ],
      '/lunch/': [
        {
          text: '午餐',
          items: [
            { text: '午餐首页', link: '/lunch/' },
            ...getDocumentItems('lunch')
          ]
        }
      ],
      '/dinner/': [
        {
          text: '晚餐',
          items: [
            { text: '晚餐首页', link: '/dinner/' },
            ...getDocumentItems('dinner')
          ]
        }
      ],
      '/stir-fry/': [
        {
          text: '炒菜',
          items: [
            { text: '炒菜首页', link: '/stir-fry/' },
            ...getDocumentItems('stir-fry')
          ]
        }
      ],
      '/drinks/': [
        {
          text: '饮品',
          items: [
            { text: '饮品首页', link: '/drinks/' },
            ...getDocumentItems('drinks')
          ]
        }
      ],
      '/about/': [
        {
          text: '关于我',
          items: [
            { text: '关于我', link: '/about/' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dXiaoWangSec/cook' }
    ],
    footer: {
      message: '慢慢做饭，好好吃饭。',
      copyright: 'Copyright © 2026 一日三餐'
    },
    outline: 'deep',
    search: {
      provider: 'local'
    }
  },
  head: [
    ['meta', { name: 'theme-color', content: '#f7f3eb' }]
  ]
})
