---
title: 使用valaxy搭建属于自己的blog
date: 2023-1-12
updated: 2022-04-01
categories: 博客搭建
tags:
  - valaxy
  - 博客搭建
top: 1
---
## 使用valaxy搭建属于自己的blog

> [官网](https://valaxy.site/) [github](https://github.com/YunYouJun/valaxy)

1. 下载项目到本地
> git clone https://github.com/YunYouJun/valaxy.git 
2. 创建属于自己的blog
> npm init valaxy  
执行命令后，可以指定项目名（默认为valaxy-blog），init的项目就是最终自己的blog 
3. 启动项目
```
   进入项目文件夹 cd valaxy-blog
   安装依赖 npm i 
   启动项目 npm run dev
   启动成功后即可访问博客：http://localhost:4859/
```
4. 修改主页配置
```
  在valaxy.config.ts 中修改对应的配置，如title，联系方式等等。
```
5. 修改关于我界面
```
  pages文件夹下面存放的是展示到页面上的内容
  如about中存放的是关于我页面的内容，可以通过修改对应的md文件实现
```
6. 新增与修改博客
```
pages/posts文件夹记录的就是存放blog，可以通过新增修改md文件实现博客的新增与修改
```