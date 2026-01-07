module.exports = {
  base: '/tiny-excel-doc/',
  lang: 'zh-CN',
  title: 'Tiny Excel',
  description: 'tiny-excel 是一个由 canvas 实现的简易版高性能网页 Excel，由原生 js 实现，跨框架，在 Angular、React、VUE 中均可正常使用',
  markdown: {
    lineNumbers: false,
  },
  locales: {
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'Tiny Excel',
      description: 'tiny-excel is a simple, high-performance web-based Excel application implemented using HTML5 canvas.  It\'s built with pure JavaScript, is framework-agnostic, and works seamlessly with Angular, React, and Vue.'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Tiny Excel',
      description: 'tiny-excel 是一个由 canvas 实现的简易版高性能网页 Excel，由原生 js 实现，跨框架，在 Angular、React、VUE 中均可正常使用'
    }
  },
  themeConfig: {
    home: true,
    subSidebar: 'auto',
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        sidebar: [
          {
            title: 'Guide',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              '/guide/install.md',
              '/guide/use.md',
              '/guide/config.md',
              '/guide/method.md',
              '/guide/demo.md',
            ],
          }
        ],
      },
      '/zh/': {
        selectText: '选择语言',
        label: '简体中文',
        sidebar: [
          {
            title: '使用指南',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              '/zh/guide/install.md',
              '/zh/guide/use.md',
              '/zh/guide/config.md',
              '/zh/guide/method.md',
              '/zh/guide/demo.md',
            ],
          }
        ],
      }
    },
  },
}