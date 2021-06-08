import { map } from './array-methods.js';
describe('map', () => {
  it('Takes an Array and callback of signature item => {} and creates new array', () => {
    const numberArray = [1, 2, 4, 8];
    const doubleArray = map(numberArray, item => { return item * 2; });

    expect(doubleArray).toEqual([2, 4, 8, 16]);
    expect(doubleArray.length).toEqual(4);

  });
});
