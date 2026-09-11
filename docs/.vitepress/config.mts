import { defineConfig } from 'vitepress'

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base = repository ? `/${repository}/` : '/'

export default defineConfig({
  title: '一日三餐',
  description: '记录热菜、冷菜与日常厨房灵感',
  lang: 'zh-CN',
  base,
  cleanUrls: true,
  themeConfig: {
    logo: '🍳',
    siteTitle: '一日三餐',
    nav: [
      { text: '首页', link: '/' },
      { text: '热菜', link: '/hot-dishes' },
      { text: '冷菜', link: '/cold-dishes' },
      { text: '关于我', link: '/about' }
    ],
    sidebar: {
      '/hot-dishes': [
        {
          text: '热菜',
          items: [
            { text: '热菜首页', link: '/hot-dishes' }
          ]
        }
      ],
      '/cold-dishes': [
        {
          text: '冷菜',
          items: [
            { text: '冷菜首页', link: '/cold-dishes' }
          ]
        }
      ],
      '/about': [
        {
          text: '关于我',
          items: [
            { text: '关于我', link: '/about' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
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
