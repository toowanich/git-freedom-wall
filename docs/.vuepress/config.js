const roster = require('./roster')

const sidebar = [
  {
    title: 'Home',
    children: [['/contributing', 'Contributing']]
  },
  {
    title: 'Roster',
    children: roster
  }
]

const navbarLinks = [
  { text: 'AWS Amplify', link: 'https://aws.amazon.com/amplify' },
  { text: 'AWS Training', link: 'https://aws.training' },
  { text: 'AWS Free Tier', link: 'https://aws.amazon.com/free' }
]

// :: ---

module.exports = {
  title: 'Freedom Wall',
  description: 'A live document of attendees to our workshops.',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    ['link', { rel: 'shortcut icon', type: 'image/png', href: '/logo.png' }],
    ['link', { rel: 'theme-color', content: '#ffffff' }]
  ],
  themeConfig: {
    sidebar,
    lastUpdated: true,
    repo: 'richardneililagan/git-freedom-wall',
    repoLabel: 'Github',
    smoothScroll: true,
    logo: '/logo.png',
    nav: navbarLinks
  }
}
