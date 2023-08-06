import { describe, test, assert } from 'vitest';
import DECK_TYPE from '@/constants/deckType';
import {
  getMonsterModifiedDeck,
  evaluateExpression,
  transformAction,
} from './getMonsterModifiedDeck.js';

describe('getMonsterModifiedDeck', () => {
  describe('evaluateExpression', () => {
    test('with addition', () => {
      assert.equal(evaluateExpression('MONSTER_LEVEL + 2', 3), 5);
    });

    test('with subtraction', () => {
      assert.equal(evaluateExpression('MONSTER_LEVEL - 2', 3), 1);
    });

    test('with multiplication', () => {
      assert.equal(evaluateExpression('MONSTER_LEVEL * 2', 3), 6);
    });

    test('with division', () => {
      assert.equal(evaluateExpression('MONSTER_LEVEL / 2', 4), 2);
    });

    test('with complex expression', () => {
      assert.equal(evaluateExpression('MONSTER_LEVEL * 2 - 1', 3), 5);
    });
  });

  describe('transformAction', () => {
    test('with only damage', () => {
      assert.deepEqual(transformAction(`DMG:3`, 1), { damage: 3 });
    });

    test('with trash', () => {
      assert.deepEqual(transformAction(`TRASH:2`, 1), { trash: 2 });
    });

    test('with discard', () => {
      assert.deepEqual(transformAction(`DISCARD:MONSTER_LEVEL`, 2), { discard: 2 });
    });

    test('with skill decrease', () => {
      assert.deepEqual(transformAction(`SKILL_DECREASE:COMBAT:2`, 1), {
        decreaseSkill: { skill: 'COMBAT', amount: 2 },
      });
    });

    test('with combined actions', () => {
      assert.deepEqual(transformAction(`DMG:3/TRASH:1/DISCARD:MONSTER_LEVEL`, 2), {
        damage: 3,
        trash: 1,
        discard: 2,
      });
    });
  });
});
