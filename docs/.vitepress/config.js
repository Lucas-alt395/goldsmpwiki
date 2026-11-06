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
          { text: 'GoldSMP', link: '/' },
          { text: 'Server regels', link: '/rules' }
          { text: 'Regels bij Oorlogen', link: '/warrules' }
        ]
      },
      {
        text: '🥔 Aardappelland',
        items: [
          { text: 'Overview', link: '/aardappelland/overview' },
          { text: 'Geschiedenis', link: '/aardappelland/history'}
          { text: 'Lucasstad', link: '/aardappelland/lucasstad' },
          { text: 'Train Network', link: '/aardappelland/trainnetwork' }
        ]
      },
      {
        text: '🦅 Ravenburg',
        items: [
          { text: 'Overview', link: '/ravenburg/overview' },
          { text: 'Geschiedenis & Lore', link: '/ravenburg/history' },
          { text: 'Trein netwerk', link: '/ravenburg/trainnetwork' }
        ]
      }
    ],
    footer: {
      message: 'Official documentation for the GoldSMP geopolitical server.',
      copyright: 'Copyright © GoldSMP'
    }
  }
}
