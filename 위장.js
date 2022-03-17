function solution(clothes) {
  const obj = {};
  let result = 1;

  for (let i of clothes) {
    obj[i[1]] = (obj[i[1]] || 0) + 1;
  }

  for (let j in obj) {
    result *= obj[j] + 1;
  }

  return result - 1;
}

console.log(
  solution([
    ["yellowhat", "headgear"],
    ["bluesunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);
