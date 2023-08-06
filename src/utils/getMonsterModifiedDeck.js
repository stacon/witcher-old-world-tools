import config from '@/config/tools/monster-fight.json';

const INFICTION_TYPES = Object.freeze({
  DAMAGE: 'DMG',
  TRASH: 'TRASH',
  DISCARD: 'DISCARD',
  SKILL_DECREASE: 'SKILL_DECREASE',
});

const transformAction = (actionString, monsterLevel) => {
  const actions = actionString.split('/');
  const result = {};

  actions.forEach((action) => {
    const parts = action.split(':');
    const actionType = parts[0];

    switch (actionType) {
      case INFICTION_TYPES.DAMAGE:
        if (parts[1] === 'SKILL') {
          return (result.damage = parts[2]);
        }
        return (result.damage = evaluateExpression(parts[1], monsterLevel));
      case INFICTION_TYPES.TRASH:
        return (result.trash = parseInt(parts[1]));
      case INFICTION_TYPES.DISCARD:
        return (result.discard = evaluateExpression(parts[1], monsterLevel));
      case INFICTION_TYPES.SKILL_DECREASE:
        const skill = parts[1];
        const decreaseAmount = parseInt(parts[2]);
        return (result.decreaseSkill = { skill, amount: decreaseAmount });
    }
  });

  return result;
};

const evaluateExpression = (expression, monsterLevel) => {
  const equation = expression.replace('MONSTER_LEVEL', monsterLevel);

  return new Function('return ' + equation)();
};

const getMonsterModifiedDeck = (deckType, monsterLevel) =>
  config.cards[deckType].map((entry) => ({
    id: entry.id,
    charge: transformAction(entry.charge, monsterLevel),
    bite: transformAction(entry.bite, monsterLevel),
  }));

export { getMonsterModifiedDeck, INFICTION_TYPES, evaluateExpression, transformAction };
