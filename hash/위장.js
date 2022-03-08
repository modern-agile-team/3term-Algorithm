function solution(clothes) {
  let answer = 1;
  let closet = {};

  for (let item of clothes) {
    item[1] in closet ? (closet[item[1]] += 1) : (closet[item[1]] = 1);
  }

  for (let item in closet) {
    answer *= closet[item] + 1;
  }

  return answer - 1;
}
