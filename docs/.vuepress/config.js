module.exports = {
    title: '知识的海洋',
    description: '知识记录，记录生活',
    base: '/blog/',
    head: [
      ['link', { rel: 'icon', href: '/public/logo.png' }]
    ],
    themeConfig: {
      repo: 'https://github.com/isMyShell/blog.git',
      repoLabel: 'GitHub',
      nav: [
          { text: '首页', link: '/' },
          { text: '前端', link: '/front-end/' },
          { text: '数据结构与算法', link: '/data-structures-and-algorithms/data-structures/stack' },
          { text: '其他', link: 'https://www.baidu.com' }
      ],
      sidebar: {
        '/front-end/': [{
            title: 'javascript',
            collapsable: false,
            children: [
              'javascript/this',
              'javascript/new',
              'javascript/scope'
            ],
          },{
            title: 'typeScript',
            ollapsable: false,
            children: [
              'typescript/interface',
              'typescript/type'
            ]
        }],
        '/data-structures-and-algorithms/': [{
          title: '数据结构',
          collapsable: false,
          children: [
            'data-structures/stack',
          ],
        },{
          title: '算法',
          ollapsable: false,
          children: [
            'algorithms/sort'
          ]
      }]
      },
    }
  }