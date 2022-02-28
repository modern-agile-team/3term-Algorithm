/*
백준 K번째 수

문제
수 N개 A1, A2, ..., AN이 주어진다. A를 오름차순 정렬했을 때, 앞에서부터 K번째 있는 수를 구하는 프로그램을 작성하시오.

입력
첫째 줄에 N(1 ≤ N ≤ 5,000,000)과 K (1 ≤ K ≤ N)이 주어진다.
둘째에는 A1, A2, ..., AN이 주어진다. (-109 ≤ Ai ≤ 109)

출력
A를 정렬했을 때, 앞에서부터 K번째 있는 수를 출력한다.
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const input1 = input[0].split(" ");
const input2 = input[1].split(" ");

function solution(input1, input2) {
  const k = input1[1];

  const result = quickSort(input2);
  console.log(result);
  // return result[k];
}

function quickSort(num) {
  const pivot = [num[0]];
  const min = [];
  const max = [];

  if (!min) {
    return num;
  }

  for (let i = 1; i < num.length; i++) {
    if (num[i] < pivot[0]) {
      min.push(num[i]);
    } else if (num[i] > pivot[0]) {
      max.push(num[i]);
    } else {
      pivot.push(num[i]);
    }
  }

  return quickSort(min.concat(pivot, max));
}

console.log(solution(input1, input2));
