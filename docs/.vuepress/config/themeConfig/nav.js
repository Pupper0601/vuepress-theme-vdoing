// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '语言',
    link: '/language/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: '语言',
        items: [
          { text: 'Python', link: '/pages/9bc27f/' },
          { text: 'Java', link: '/pages/a9c228/' },
          { text: 'HTML5', link: '/pages/2623bc/' },
          { text: 'CSS', link: '/pages/64dac3/' },
        ],
      },

      {
        text: '系统',
        items: [
          { text: 'Linux', link: '/pages/c083ed/' },
        ],
      },
    ],
  },





  {
    text: '数据库',
    link: '/database/',
    items: [
      { text: 'MySQL', link: '/pages/11135f/' },
      { text: 'mongoDB', link: '/pages/a2819c/' },
    ],
  },





  {
    text: '软件测试',
    link: '/test/',
    items: [
      {
        text: '测试技术',
        items: [
          { text: '功能测试', link: '/pages/2725cf/' },
          { text: '性能测试', link: '/pages/2f43f2/' },
          { text: '安全测试', link: '/pages/80b731/' },
          { text: '自动化测试', link: '/pages/c284bc/' },
          { text: '测试开发', link: '/pages/a84b92/' },

        ],
      },
      {
      text: '测试工具',
      items: [
        { text: '测试工具', link: '/pages/0b9122/' },
        ],
      },
    ],
  },

  {
    text: '测试技术',
    items: [
      { text: '测试技术', link: '/pages/a0775e/' },   
        ],
  
  
  },

  {
    text: 'web前端',
    link: '/tools/',
    items: [
      { text: 'Vue样式', link: '/pages/bd7d08/' },   
        ],
  },



  {
    text: '工具',
    link: '/tools/',
    items: [
      { text: '电脑工具', link: '/pages/cf7893/' },
      { text: '手机工具', link: '/pages/f83c5d/' },
         
        ],
  },





  {
    text: '更多',
    link: '/more/',
    items: [
      { text: '实用技巧', link: '/pages/4cdca8/' },
      { text: '面试', link: '/pages/18150b/' },
      { text: '杂货', link: '/pages/da8f86/' },
    ],
  },



  {
    text: '收藏',
    link: '/pages/dd08cc/',
    items: [
      { text: '网站', link: '/pages/dd08cc/' },
      { text: '资源', link: '/pages/1e4756/' },
    ],
  },





  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '归档', link: '/archives/' },
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
    ],
  },


  { text: '关于', link: '/about/' },
]
