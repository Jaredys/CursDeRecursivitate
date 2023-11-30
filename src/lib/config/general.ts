import type { ThemeConfig, HeadConfig, HeaderConfig, FooterConfig, DateConfig, FeedConfig } from '$lib/types/general'

export const theme: ThemeConfig = [
  {
    name: 'cmyk',
    text: '🖨 Luminos'
  },
  {
    name: 'dracula',
    text: '🧛 Dracula'
  },
  {
    name: 'valentine',
    text: '🌸 Trandafiri'
  },
  {
    name: 'aqua',
    text: '💦 Ocean'
  },
  {
    name: 'synthwave',
    text: '🌃 Violet'
  },
  {
    name: 'night',
    text: '🌃 Intunecat'
  },
  {
    name: 'lofi',
    text: '🎶 Petrecere'
  },
  {
    name: 'lemonade',
    text: '🍋 Limonada'
  },
  {
    name: 'cupcake',
    text: '🧁 Prajitura'
  },
  {
    name: 'garden',
    text: '🏡 Gradina'
  },
  {
    name: 'retro',
    text: '🌇 Retro'
  },
  {
    name: 'black',
    text: '🖤 Intunecat v2'
  }
]

export const head: HeadConfig = {}

export const header: HeaderConfig = {
  nav: [
    {
      text: 'Incepe Cursul',
      link: '/Introducere'
    },
    {
      text: 'Despre Site',
      link: '/Despre'
    }
  ]
}

export const footer: FooterConfig = {
  nav: [
    {
      text: 'Feed',
      link: '/atom.xml'
    },
    {
      text: 'Sitemap',
      link: '/sitemap.xml'
    }
  ]
}

export const date: DateConfig = {
  locales: 'en-US',
  options: {
    year: '2-digit',
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  }
}

export const feed: FeedConfig = {}
