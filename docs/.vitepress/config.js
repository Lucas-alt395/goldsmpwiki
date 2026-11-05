export default {
  title: 'GoldSMP Wiki',
  description: 'Official lore, geopolitics, and guides for GoldSMP',
  themeConfig: {
    siteTitle: 'GoldSMP Wiki',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Aardappelland', link: '/aardappelland/overview' },
      { text: 'Ravenburg', link: '/ravenburg/overview' }
    ],
    sidebar: [
      {
        text: '🏆 GoldSMP',
        items: [
          { text: 'Welcome to GoldSMP', link: '/' },
          { text: 'Server Rules', link: '/rules' }
        ]
      },
      {
        text: '🥔 Aardappelland',
        items: [
          { text: 'Overview & Towns', link: '/aardappelland/overview' },
          { text: 'Lucasstad History', link: '/aardappelland/lucasstad' },
          { text: 'Infrastructure & Transit', link: '/aardappelland/transit' }
        ]
      },
      {
        text: '🦅 Ravenburg',
        items: [
          { text: 'Overview & Towns', link: '/ravenburg/overview' },
          { text: 'History & Lore', link: '/ravenburg/history' },
          { text: 'Infrastructure & Transit', link: '/ravenburg/transit' }
        ]
      }
    ],
    footer: {
      message: 'Official documentation for the GoldSMP geopolitical server.',
      copyright: 'Copyright © GoldSMP'
    }
  }
}
