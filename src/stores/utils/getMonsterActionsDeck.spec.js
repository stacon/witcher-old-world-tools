import { test, expect } from 'vitest';
import { getMonsterActionsDeck } from './getMonsterActionsDeck';
import DECK_TYPE from '@/constants/deckType';

test('getMonsterActionsDeck should return an array', () => {
  const result = getMonsterActionsDeck(3, DECK_TYPE.BASIC);
  expect(Array.isArray(result));
});

test('getMonsterActionsDeck should return an array with length equal to monsterHealth', () => {
  const result = getMonsterActionsDeck(5, DECK_TYPE.BASIC);
  expect(result.length === 5);
});

test('getMonsterActionsDeck should return a shuffled array', () => {
  const result1 = getMonsterActionsDeck(3, DECK_TYPE.BASIC);
  const result2 = getMonsterActionsDeck(3, DECK_TYPE.BASIC);
  expect(result1.toString() !== result2.toString());
});

test('getMonsterActionsDeck should return an empty array if monsterHealth is 0', () => {
  const result = getMonsterActionsDeck(0, DECK_TYPE.BASIC);
  expect(result.length === 0);
});

test('getMonsterActionsDeck should return the entire deck if monsterHealth is greater than the deck length', () => {
  const result = getMonsterActionsDeck(10, DECK_TYPE.BASIC);
  expect(result.length === 6);
});
