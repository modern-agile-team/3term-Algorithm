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

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().split("\n");

// K번째 수 최종 정답, 퀵 선택 알고리즘을 채택해서 사용
function solution(input) {
  const k = input[0].split(" ");
  const arr = input[1].split(" ");
  const result = quick(arr.map((item) => Number(item)));

  return result[k[1] - 1];
}

function quick(arr, left = 0, right = arr.length - 1) {
  const mid = parseInt((left + right) / 2);
  const pivot = arr[mid];
  const newLeft = divide(arr, left, right, pivot);

  if (left >= right) {
    return;
  }

  quick(arr, newLeft, right);
  quick(arr, left, newLeft - 1);

  return arr;
}

function divide(arr, left, right, pivot) {
  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }
    while (pivot < arr[right]) {
      right--;
    }

    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return left;
}

console.log(solution(input));

// 처음 풀이한 코드, 메모리 초과로 실패
function solution(input) {
  const k = input[0].split(" ");
  const result = quickSort(arr[1].split(" "));

  return result[k[1] - 1];
}

function quickSort(arr) {
  console.log("arr", arr);
  if (!arr.length) {
    return [];
  }

  const pivot = arr[0];
  const min = [];
  const max = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      min.push(arr[i]);
    } else if (arr[i] > pivot) {
      max.push(arr[i]);
    }
  }

  const minSorted = quickSort(min);
  const maxSorted = quickSort(max);

  return [...minSorted, pivot, ...maxSorted];
}

console.log(solution(input));
