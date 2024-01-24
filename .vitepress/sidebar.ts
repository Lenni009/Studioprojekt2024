import type { DefaultTheme } from 'vitepress';

export function sidebar(): DefaultTheme.SidebarItem[] {
  // text: der Text, der in der Seitenleiste erscheint
  // link: URL, unter der die Seite erreichbar ist. Muss mit dem Dateinamen der entsprechenden .md Datei übereinstimmen
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

