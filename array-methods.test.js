/* eslint-disable keyword-spacing */
import { map, filter, findIndex, reduce } from './array-methods.js';



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

    const filteredArray = filter(wordsArray, item => { if (item.length > 6) return item; });



    expect(filteredArray).toEqual(['exuberant', 'destruction', 'present']);



  });
});

describe('findIndex(arr, callback)', () => {
  test('returns index of array based on true callback', () => {
    const firstArray = [0, 1, 2, 3];

    const newArray = findIndex(firstArray, (numBooger) => { return numBooger === 2; });
    expect(newArray).toEqual(2);
  });

});

describe(' testing the reduce(arr, callback, initalValue) func', () => {
  test('testing if the acc return', () => {
    const array = [1, 3, 6, 10];
    const newArray = reduce(array, (num) => { return num; }, 0);
    expect(newArray).toEqual(20);
  });

});

