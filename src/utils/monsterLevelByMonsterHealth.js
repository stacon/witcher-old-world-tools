export const monsterLevelByMonsterHealth = (monsterHealth) => {
  if (monsterHealth <= 12) {
    return 1;
  }
  if (monsterHealth <= 15) {
    return 2;
  }
  return 3;
};
