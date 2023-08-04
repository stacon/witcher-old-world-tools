import { describe, it, expect } from 'vitest'
import { shuffledArray } from './shuffledArray';

describe('shuffledArray', () => {
  it('should return a shuffled array', () => {
    const array = [1, 2, 3, 4, 5];
    const shuffled = shuffledArray(array);
    expect(shuffled).not.toEqual(array);
    expect(shuffled).toHaveLength(array.length);
    expect(shuffled.sort()).toEqual(array.sort());
  });

  it('should return an empty array when given an empty array', () => {
    const array = [];
    const shuffled = shuffledArray(array);
    expect(shuffled).toEqual([]);
  });

  it('should not modify the original array', () => {
    const array = [1, 2, 3, 4, 5];
    const shuffled = shuffledArray(array);
    expect(shuffled).not.toBe(array);
    expect(array).toEqual([1, 2, 3, 4, 5]);
  });
});