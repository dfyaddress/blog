import type { VitePluginConfig as UnoCssConfig } from 'unocss/vite'
import type { Awaitable } from '@antfu/utils'
import type { SiteConfig, UserSiteConfig } from '../../types'
import type { UserConfig } from '../types'

export * from './addon'

/**
 * Type site helper
 */
export function defineSite<ThemeConfig>(config: UserSiteConfig<ThemeConfig>) {
  return config
}

/**
 * Type site helper for custom theme site
 */
export function defineSiteWithTheme<ThemeConfig>(
  config: UserSiteConfig<ThemeConfig>,
) {
  return config
}

/**
 * Type valaxy config helper
 */
export function defineValaxyConfig<ThemeConfig>(config: UserConfig<ThemeConfig>) {
  return config
}
export const defineConfig = defineValaxyConfig

export const defaultSiteConfig: SiteConfig = {
  mode: 'auto',
  url: '/',
  lang: 'en',
  title: 'Valaxy Blog',
  description: 'A blog generated by Valaxy.',
  subtitle: 'Next Generation Static Blog Framework.',
  author: {
    // todo valaxy logo
    avatar: 'https://www.yunyoujun.cn/images/avatar.jpg',
    email: 'i@valaxy.site',
    link: 'https://valaxy.site',
    name: 'VALAXY Developer',
    status: {
      emoji: '🌌',
      message: 'The moonlight is beautiful.',
    },
  },
  favicon: '/favicon.svg',
  feed: {
    name: '',
    favicon: '/favicon.svg',
  },
  social: [],

  date: {
    format: '',
  },
  lastUpdated: true,
  ignoreDeadLinks: true,

  license: {
    enabled: true,
    language: '',
    type: 'by-nc-sa',
  },

  sponsor: {
    enable: true,
    title: '赞助',
    methods: [],
  },

  search: {
    enable: false,
    type: 'algolia',
  },

  comment: {
    enable: false,
  },

  cdn: {
    prefix: 'https://unpkg.com/',
  },

  features: {
    katex: true,
  },

  theme: 'yun',
  themeConfig: {
    pkg: {
      name: '',
      version: '',
    },
  },

  // markdown: {
  //   excerpt: '<!-- more -->',
  // },
  runtime: { addons: {} },
}

export type UnoSetup = () => Awaitable<Partial<UnoCssConfig> | undefined>

export function defineUnoSetup(fn: UnoSetup) {
  return fn
}
