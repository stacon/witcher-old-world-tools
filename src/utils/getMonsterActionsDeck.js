import { shuffledArray } from './shuffledArray';
import { monsterLevelByMonsterHealth } from './monsterLevelByMonsterHealth';
import { getMonsterModifiedDeck } from './getMonsterModifiedDeck';

export const getMonsterActionsDeck = (monsterHealth, deckType) => {
  const monsterLevel = monsterLevelByMonsterHealth(monsterHealth);
  const levelModifiedMonsterDeck = getMonsterModifiedDeck(deckType, monsterLevel);
  const shuffledDeck = shuffledArray(levelModifiedMonsterDeck);

  return shuffledDeck.slice(0, monsterHealth);
};
