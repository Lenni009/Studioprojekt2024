import type { DefaultTheme } from 'vitepress';

export function sidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Welt',
      collapsed: false,
      items: [
        { text: 'Regionen', link: '/welt' },
        { text: 'Lore', link: '/lore' },
        { text: 'Völker', link: '/völker' },
        { text: 'NPC', link: '/npc' },
        { text: 'Klassen', link: '/klassen' },
        { text: 'Gruppe', link: '/gruppe' }, 
      ]
    },
    {
      text: 'Kampf',
      collapsed: false,
      items: [
        { text: 'Waffen', link: '/waffen' },
        { text: 'Items', link: '/items' },
        { text: 'Gegner', link: '/gegner' },
      ]
    }
  ]
}

