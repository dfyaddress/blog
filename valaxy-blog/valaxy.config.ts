import { defineConfig } from 'valaxy'
import type { ThemeConfig } from 'valaxy-theme-yun'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineConfig<ThemeConfig>({
  // url: 'https://valaxy.site/11/',
  lang: 'zh-CN',
  title: '知世而长',
  author: {
    name: '知世而长',
    avatar:"https://api.ixiaowai.cn/gqapi/gqapi.php"
  },
  subtitle:"时间不痛不痒 我们却变了心肠",
  description: '孤独盛装来访 世人都一个模样',
  social: [
    // {
    //   name: 'RSS',
    //   link: '/atom.xml',
    //   icon: 'i-ri-rss-line',
    //   color: 'orange',
    // },
    {
      name: '手机 8615107731663',
      icon: 'i-ri-phone-line',
      color: 'orange',
    },
    {
      name: 'QQ 1814366463',
      icon: 'i-ri-qq-line',
      color: '#12B7F5',
    },
    {
      name: '微信 15107731663',
      icon: 'i-ri-wechat-line',
      color: 'green',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/dfyaddress',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    // {
    //   name: '微博',
    //   link: 'https://weibo.com/jizhideyunyoujun',
    //   icon: 'i-ri-weibo-line',
    //   color: '#E6162D',
    // },
    // {
    //   name: '豆瓣',
    //   link: 'https://www.douban.com/people/yunyoujun/',
    //   icon: 'i-ri-douban-line',
    //   color: '#007722',
    // },
    {
      name: '网易云音乐',
      link: 'https://y.music.163.com/m/user?id=282705040&dlt=0846&app_version=8.9.10',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },
    {
      name: '知乎',
      link: 'https://mp.weixin.qq.com/s?__biz=MzU1NTU3OTk1Ng==&mid=2247489962&idx=1&sn=8850428d44f58d74c572a0a13dcaed40&chksm=fbd376f1cca4ffe79c046e7113cf42ac466231274bc30353f6c18f3c6ecd886d2d230c9bbb80&scene=90&sessionid=1673353921&subscene=236#rd',
      icon: 'i-ri-zhihu-line',
      color: '#0084FF',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/125117880?share_from=space&share_medium=iphone&share_plat=ios&share_session_id=D77D8D0B-D029-4945-B20E-B4DEC5124936&share_source=WEIXIN&share_tag=s_i&timestamp=1673452106&unique_k=tKHiUNX',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/fyd56085640',
      icon: 'i-ri-twitter-line',
      color: '#1da1f2',
    },
    // {
    //   name: 'Telegram Channel',
    //   link: 'https://t.me/elpsycn',
    //   icon: 'i-ri-telegram-line',
    //   color: '#0088CC',
    // },
    {
      name: 'E-Mail',
      link: 'mailto:1814366463@qq.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    // {
    //   name: 'Travelling',
    //   link: 'https://travellings.link',
    //   icon: 'i-ri-train-line',
    //   color: 'var(--va-c-text)',
    // },
  ],

  search: {
    enable: false,
  },

  // sponsor: {
  //   enable: true,
  //   title: '我很可爱，请给我钱！',
  //   methods: [
  //     {
  //       name: '支付宝',
  //       url: 'https://cdn.yunyoujun.cn/img/donate/alipay-qrcode.jpg',
  //       color: '#00A3EE',
  //       icon: 'i-ri-alipay-line',
  //     },
  //     {
  //       name: 'QQ 支付',
  //       url: 'https://cdn.yunyoujun.cn/img/donate/qqpay-qrcode.png',
  //       color: '#12B7F5',
  //       icon: 'i-ri-qq-line',
  //     },
  //     {
  //       name: '微信支付',
  //       url: 'https://cdn.yunyoujun.cn/img/donate/wechatpay-qrcode.jpg',
  //       color: '#2DC100',
  //       icon: 'i-ri-wechat-pay-line',
  //     },
  //   ],
  // },

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '知世而长',
    },
    bg_image: {
      enable: true ,
      url: "https://api.ixiaowai.cn/gqapi/gqapi.php" 
    },
    pages: [
      {
        name: '我的小伙伴们',
        url: '/links/',
        icon: 'i-ri-genderless-line',
        color: 'dodgerblue',
      },
      // {
      //   name: '喜欢的女孩子',
      //   url: '/girls/',
      //   icon: 'i-ri-women-line',
      //   color: 'hotpink',
      // },
    ],

    footer: {
      since: 2023,
      beian: {
        enable: false,
        icp: '苏ICP备17038157号',
      },
      icon: {
        name: 'i-ri-cloud-line',
        animated: true,
        color: 'var(--va-c-primary)',
        url: 'https://sponsors.yunyoujun.cn',
        title: '支持创作者（非本人）',
      },
    },
  },

  unocss: { safelist },
})
