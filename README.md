<h1 align="center">
<a href="https://valaxy.yyj.moe">Valaxy</a>
</h1>

<p align="center">
๐ Next Generation Static Blog Framework (Beta).
</p>

<pre align="center">
๐งช Working in Progress
</pre>

<p align="center">
<a href="https://www.npmjs.com/package/valaxy" rel="nofollow"><img src="https://img.shields.io/npm/v/valaxy?color=0078E7" alt="NPM version"></a>
<a href="https://github.com/YunYouJun/valaxy/actions/workflows/release.yml"><img src="https://github.com/YunYouJun/valaxy/actions/workflows/release.yml/badge.svg" alt="Release"></a>
<a href="https://discord.gg/nd3mPkU5j8" target="_blank">
<img alt="Discord" src="https://img.shields.io/discord/752821465891733574?color=%234960ea&logo=discord">
</a>
</p>

- **English** | [็ฎไฝไธญๆ](./README.zh-CN.md)
- [English Docs](https://valaxy.site/?lang=en) | [ไธญๆๆๆกฃ](https://valaxy.site/?lang=zh-CN)
- [Demo](https://yun.valaxy.site): <small>with [valaxy-theme-yun](./packages/valaxy-theme-yun/)</small>

## Usage

### Try it Online

[![StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/valaxy)

### Init Project Locally

Just run the following command to init your blog:

```bash
# pnpm (recommended)
pnpm create valaxy
# npm
# npm init valaxy
# yarn
# yarn create valaxy
```

For a example, you can see [demo/yun](./demo/yun/) folder.

## Features

- โก๏ธ [Vue 3](https://github.com/vuejs/vue-next), [Vite 3](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/), [ESBuild](https://github.com/evanw/esbuild) - born with fastness
- ๐ฅ Hot Reload with Config & Markdown
- ๐ง Type Tooltip for all config by `valaxy.config.ts`
- ๐ Extended Markdown Frontmatter
- ๐ File based routing via [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages)
- ๐ฆ Components auto importing via [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
- ๐จ Static-site generation (SSG) via [vite-ssg](https://github.com/antfu/vite-ssg) (SPA is OK!)
- ๐ธ RSS & Sitemap
- ๐จ Free to use Tailwind CSS via [UnoCSS](https://github.com/antfu/unocss)
- ๐ [CSS i18n in One Page](https://valaxy.yyj.moe/posts/i18n)
- ๐ [Use icons from any icon sets with classes](https://github.com/antfu/unocss/tree/main/packages/preset-icons) - [Icรดnes](https://icones.netlify.app/)
- ๐ Extended Theme with [Layout system](https://github.com/JohnCampionJr/vite-plugin-vue-layouts)
- โ๏ธ Unit Testing with [Vitest](https://github.com/vitest-dev/vitest) (Todo)
- โ๏ธ Deploy zero-config
  - [Netlify](https://www.netlify.com/) with `netlify.toml`
  - [GitHub Pages](https://pages.github.com/) with `.github/workflows/gh-pages.yml` [GitHub Actions](https://github.com/features/actions)
- โป๏ธ Use any vite plugins
  - ๐ฒ You can implement PWA by [vite-plugin-pwa](https://github.com/antfu/vite-plugin-pwa>)
- ...

## Dev

Want to get involved in the development? Look [here](https://valaxy.site/dev).

Want to create your theme? Check [valaxy-theme-starter](https://github.com/YunYouJun/valaxy-theme-starter).

## Thanks

๐ The implementation of Valaxy is based on or refer the following projects:

- [Vue](https://github.com/vuejs/core)
- [VueUse](https://github.com/vueuse/vueuse)
- [Vite](https://github.com/vitejs/vite)
- [VitePress](https://github.com/vuejs/vitepress)
- [Vitesse](https://github.com/antfu/vitesse)
- [Slidev](https://github.com/slidevjs/slidev)

## [Sponsors](https://sponsors.yunyoujun.cn)

โค๏ธ Special thanks to the following sponsors for their support.

<p align="center">
  <a href="https://sponsors.yunyoujun.cn">
    <img src='https://fastly.jsdelivr.net/gh/YunYouJun/sponsors/public/sponsors.svg'/>
  </a>
</p>
