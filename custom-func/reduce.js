const array = [1, 2, 5, 7];
const arr = ['1', 2, '5', 7];
function reduces(arr, first = 0) {
  let count = first;
  for (let i = 0; i < arr.length; i++) {
    const currentAccount = arr[i];
    count += currentAccount;
  }
  return count;
}
// console.log(reduces(array)); // return 15
reduces(array)

function sumDifferrentParametrs(...rest) {
    return rest[0].reduce((sum, num) => (sum += num));
  }
sumDifferrentParametrs(arr);