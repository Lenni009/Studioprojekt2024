import type { CharacterSheet, CharacterTrait } from '../code/types/characterSheet';

const handeln: CharacterTrait[] = [
  {
    property: 'Taschendiebstahl',
    amount: 10,
  },
  {
    property: 'Schleichen',
    amount: 8,
  },
  {
    property: 'Akrobatik',
    amount: 3,
  },
  {
    property: 'Fallen legen',
    amount: 2,
  },
  {
    property: 'Werfen',
    amount: 10,
  },
  {
    property: 'Hieb-/Stichwaffen',
    amount: 12,
  },
  {
    property: 'Ausweichen',
    amount: 6,
  },
  {
    property: 'Schloss knacken',
    amount: 9,
  },
];

const wissen: CharacterTrait[] = [
  {
    property: 'Fallen legen',
    amount: 3,
  },
  {
    property: 'Arkanes Wissen',
    amount: 2,
  },
  {
    property: 'Wahrnehmung',
    amount: 9,
  },
  {
    property: 'Flora',
    amount: 5,
  },
  {
    property: 'Fauna',
    amount: 5,
  },
];

const soziales: CharacterTrait[] = [
  {
    property: 'Betören',
    amount: 1,
  },
  {
    property: 'Lügen',
    amount: 10,
  },
  {
    property: 'Manipulieren',
    amount: 5,
  },
];

const inventar: CharacterTrait[] = [
  {
    property: 'Kurzschwert',
    amount: 2
  }
];

const characterData: CharacterSheet = {
  name: 'Morzan Schattenläufer',
  image: '/images/schurke.jpg',
  volk: 'Wiedergänger (Mensch)',
  alter: 69,
  lebensPunkte: 100,
  statur: 'Groß',
  beruf: 'Schurke',
  anmerkungen: '',
  handeln,
  wissen,
  soziales,
  inventar,
};

export default characterData;
