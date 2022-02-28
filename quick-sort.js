function solution(arr) {
  if (!arr.length) {
    return [];
  } else {
    const left = [];
    const right = [];
    const pivot = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    return solution(left).concat(pivot, solution(right));
  }
}
const arr = [15, 6, 6, 8, 65, 4, 9, 23, 5, 43];
const N = 8;
// console.time('during quick sort');
console.log(solution(arr));
// console.timeEnd('during quick sort');

//        |  pivot  |   left                 |   right
// 1  >>  |    15   |   [6, 6, 8, 4, 9, 5]   |   [65, 23, 43]
// 2  >>  |     6   |   [4, 5]               |   [6, 8, 9]
// 3  >>  |     4   |   []                   |   [5]
// 4  >>  |     5   |   []                   |   []
// 5  >>  |     6   |   []                   |   [8, 9]
// 6  >>  |     8   |   []                   |   [9]
// 7  >>  |     9   |   []                   |   []
// 8  >>  |    65   |   [23, 43]             |   []
// 9  >>  |    23   |   []                   |   [43]
// 10 >>  |    43   |   []                   |   []
