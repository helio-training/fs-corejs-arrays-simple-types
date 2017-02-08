import Db from './db';

const CLASSES = {
  Druid: 'DRUID',
  Neutral: 'NEUTRAL',
  Mage: 'MAGE',
  Paladin: 'PALADIN',
  Shaman: 'SHAMAN',
  Priest: 'PRIEST',
  Warrior: 'WARRIOR',
  Rogue: 'ROGUE',
  Hunter: 'HUNTER',
  Warlock: 'WARLOCK',
  Dream: 'DREAM',
  DeathKnight: 'DEATHKNIGHT',
};

const RARITY = {
  Legendary: 'LEGENDARY',
  Epic: 'EPIC',
  Rare: 'RARE',
  Free: 'FREE',
  Common: 'COMMON'
};

const same = (parameter, value) => Db.Cards.filter(card => card[parameter] === value);

const filterByRarity = rarity => same('rarity', rarity);

const filterByClass = playerClass => same('playerClass', playerClass);

export const cards = {

  rarity: {

    legendary: filterByRarity(RARITY.Legendary),

    epic: filterByRarity(RARITY.Epic),

    rare: filterByRarity(RARITY.Rare),

    free: filterByRarity(RARITY.Free),

    common: filterByRarity(RARITY.Common),
  },

  playerClass: {

    druid: filterByClass(CLASSES.Druid),

    neutral: filterByClass(CLASSES.Neutral),

    mage: filterByClass(CLASSES.Mage),

    paladin: filterByClass(CLASSES.Paladin),

    shaman: filterByClass(CLASSES.Shaman),

    priest: filterByClass(CLASSES.Priest),

    warrior: filterByClass(CLASSES.Warrior),

    rogue: filterByClass(CLASSES.Rogue),

    hunter: filterByClass(CLASSES.Hunter),

    warlock: filterByClass(CLASSES.Warlock),

    dream: filterByClass(CLASSES.Dream),

    deathKnight: filterByClass(CLASSES.DeathKnight)
  },

  get total() {
    return [...this.rarity.legendary, ...this.rarity.epic, ...this.rarity.rare, ...this.rarity.free, ...this.rarity.common].length
  }
};
