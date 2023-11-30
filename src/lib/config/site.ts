import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'curs-de-recursivitate.vercel.app/',
  title: 'Recursivitate++',
  subtitle: 'Un curs de website pentru toti!',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    avatar: '/assets/maskable@512.png',
    name: 'Lates Codrin',
    status: '🐈',
    bio: 'Elev @ Colegiul Naţional de Informatică Piatra-Neamţ'
  },
  themeColor: '#3D4451'
}
