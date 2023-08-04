import config from '@/config/tools/monster-fight.json';
import { shuffledArray } from './shuffledArray';

export const getMonsterActionsDeck = (monsterHealth, deckType) => {
  const shuffledDeck = shuffledArray(config.cards[deckType]);

  return shuffledDeck.slice(0, monsterHealth);
};
