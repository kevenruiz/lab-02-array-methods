/* eslint-disable keyword-spacing */
export function map(arr, callback) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = callback(arr[i]);

  }

  return newArr;
  //for each item in array
  // do stuff
}
