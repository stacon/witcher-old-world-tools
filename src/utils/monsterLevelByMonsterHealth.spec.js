import { test } from 'vitest';
import { monsterLevelByMonsterHealth } from './monsterLevelByMonsterHealth';

test('monsterLevelByMonsterHealth should return 1 for monsterHealth <= 12', () => {
  const result = monsterLevelByMonsterHealth(12);
  expect(result).toBe(1);
});

test('monsterLevelByMonsterHealth should return 2 for monsterHealth <= 15', () => {
  const result = monsterLevelByMonsterHealth(15);
  expect(result).toBe(2);
});

test('monsterLevelByMonsterHealth should return 3 for monsterHealth > 15', () => {
  const result = monsterLevelByMonsterHealth(20);
  expect(result).toBe(3);
});
