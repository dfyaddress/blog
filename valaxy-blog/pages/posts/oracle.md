---
title: Oracle学习
date: 2022-04-01
updated: 2022-04-01
categories: Oracle 笔记
tags:
  - Oracle
  - 笔记
top: 1
---
## oracle后台进程

>系统监控进程(System Monitor SMON)

>> 在数据库系统启动时执行恢复工作的强制性进程

> 进程监控进程(Process Monitor PMON)

>> 用于恢复失败的数据库用户的强制性进程，它先获取失败用户的标识，释放该用户占有的所有数据库资源。

> 数据库写入进程(Database Writer, DBWn)

>> 它将修改后的数据块写回数据库文件。日志写入进程(Log Writer , LGWR) 一个专门用于将重做项写入重做日志的进程。

> 校验点进程(Checkpoint Process CKPT )
