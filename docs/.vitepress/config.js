export default {
  title: 'Server Wiki',
  description: 'Official lore and guides for our geopolitical server',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Lore', link: '/lore/history' },
      { text: 'Rules', link: '/guides/rules' }
    ],
    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: 'Welcome', link: '/' },
          { text: 'Rules', link: '/guides/rules' }
        ]
      },
      {
        text: 'World & Lore',
        items: [
          { text: 'History', link: '/lore/history' },
          { text: 'Towns (Lucasstad & Traade)', link: '/lore/towns' }
        ]
      },
      {
        text: 'Infrastructure',
        items: [
          { text: 'Train & Boat Transit', link: '/guides/transit' }
        ]
      }
    ]
  }
}
