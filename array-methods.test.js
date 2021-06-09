/* eslint-disable keyword-spacing */
import { map } from './array-methods.js';
import { filter } from './array-methods.js';


describe('map', () => {
  it('Takes an Array and callback of signature item => {} and creates new array', () => {
    const numberArray = [1, 2, 4, 8];
    const doubleArray = map(numberArray, item => {
      return item * 2;
    });

    expect(doubleArray).toEqual([2, 4, 8, 16]);
    expect(doubleArray.length).toEqual(4);

  });
});

describe('filter', () => {
  it('Takes an Array and callback of signature item => {} and creates new array', () => {
    const wordsArray = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

    const result = filter(wordsArray, item => { if (item.length > 6) return item; });



    expect(result).toEqual(['exuberant', 'destruction', 'present']);



  });
});
