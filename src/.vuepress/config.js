const { description } = require('../../package');
const fs = require("fs");
const path = require("path");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Courses & docs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Courses',
        link: '/courses/',
      },
      {
        text: 'Docs',
        link: '/docs/',
      },
    ],
    sidebar:{
      '/courses/' : [
        {
          title: 'Courses',   // required
          path: '/courses/',      // optional, link of the title, which should be an absolute path and must exist
          collapsable: true, // optional, defaults to true
          sidebarDepth: 2,    // optional, defaults to 1
          children: [
            {
              title: 'Handoff',   // required
              path: '/courses/handoff/',      // optional, link of the title, which should be an absolute path and must exist
              collapsable: true, // optional, defaults to true
              sidebarDepth: 1,
              children: [
                {
                  title: 'Designer & developer collaboration',   // required
                  path: '/courses/handoff/00_designer-and-developer-collaboration.html'
                },
                {
                  title: 'Think as developer',   // required
                  path: '/courses/handoff/01_think-as-developer.html'
                },
                {
                  title: 'Common ground',   // required
                  path: '/courses/handoff/02_common-ground.html'
                }
              ]
            }
          ]
        }
      ],
      '/docs/' : [
        {
          title: 'Docs',   // required
          path: '/docs/',      // optional, link of the title, which should be an absolute path and must exist
          collapsable: true, // optional, defaults to true
          sidebarDepth: 2,    // optional, defaults to 1
          children: []
        }
      ]
    }
  },
  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom'
  ]
}
