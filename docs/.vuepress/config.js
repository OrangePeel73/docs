module.exports = {
  title: 'Life', // 设置网站标题
  description: 'Love Life Love World',
  base: './dist', // 输出目录
  // 主题设置
  themeConfig: {
    // github地址
    repo: 'OrangePeel73',
    // 导航栏
    nav: [
      { text: 'Home', link: '/'},
      { text: '指南', link: '/guide/'},
      { text: '下拉',        // 这里是下拉列表展现形式。
        items: [
          { text: 'meau1', link: 'https://github.com/TaoXuSheng/focus-outside' },
          { text: 'meau2', link: 'https://github.com/TaoXuSheng/stylus-converter' },
        ]
      }
    ],

    // 为路由添加侧边栏
    sidebar: {
      '/guide/': genSidebarConfig('指南')
      // '/guide/': [
      //   {
      //     title: 'one',
      //     collapsable: false,  // 二级菜单是否可以收起
      //     children: [
      //       '/guide/one', 
      //       '/guide/two', 
      //     ]
      //   },
      //   {
      //     title: 'two',
      //     collapsable: false,  // 二级菜单是否可以收起
      //     children: [
      //       '/guide/one', 
      //       '/guide/two', 
      //     ]
      //   }
      // ]
    }
  }
}
function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'one',
        'two',
      ]
    }
  ]
}