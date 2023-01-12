---
title: Commands
title_zh-CN: 命令行
categories:
  - Guide
top: 99
---

Valaxy 内置了辅助命令行，你可使用 `valaxy` 或缩写 `vala` 来执行以下命令。

```bash
valaxy [args]

Commands:
  valaxy [root]        Start a local server for Valaxy                 [default]
  valaxy build [root]  build your blog to static content
  valaxy rss [root]    generate rss feed
  valaxy new <title>   Draft a new post

Positionals:
  root  root folder of your source files                 [string] [default: "."]

Options:
  -p, --port     port                                                   [number]
  -o, --open     open in browser                      [boolean] [default: false]
      --remote   listen public host and enable remote control
                                                       [boolean] [default: true]
      --log      log level
         [string] [choices: "error", "warn", "info", "silent"] [default: "warn"]
  -h, --help     Show help                                             [boolean]
  -v, --version  Show version number                                   [boolean]
```

## 使用

### 局部使用

你可以在项目的 `package.json` 中配置快捷脚本。（**推荐**）

```json
{
  "scripts": {
    "build": "npm run build:ssg && npm run rss",
    "build:spa": "valaxy build",
    "build:ssg": "valaxy build --ssg",
    "dev": "valaxy .",
    "rss": "valaxy rss"
  }
}
```

譬如通过 `npm run dev` 启动项目，通过 `npm run build` 可以在构建生成 ssg 站点后，再构建 RSS 源。

### 全局安装

你也可以全局安装 valaxy 以在全局使用 `valaxy` 命令。（**非必须**）

```bash
pnpm add -g valaxy
```

## 常用命令

- `valaxy .`: 启动 Valaxy，默认目录为当前目录（`.` 可不写）
- `valaxy rss`: 自动生成 RSS
- `valaxy build`: 默认采用 Vite 构建 SPA 应用
- `valaxy build --ssg`: 使用 vite-ssg 构建静态页面站点（SEO 友好，推荐）

## 文章

- `valaxy new <title>`: 在 `pages/posts` 目录下新建标题为 `title` 的帖子（.md）

譬如，`valaxy new your-first-post`，将会在 `pages/posts` 下自动新建 `your-first-post.md` 文件，并附带日期。

> 你觉得还可以有其他更常用、更好用的命令？没问题，尽管来 [Issues](https://github.com/YunYouJun/valaxy/issues) 反馈吧！
