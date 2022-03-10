const swap = function (array, front, back) {
  const tmp = array[front];
  array[front] = array[back];
  array[back] = tmp;
};

const hoarePartition = function (array, start, end) {
  const pivotValue = array[Math.floor((start + end) / 2)];

  while (start <= end) {
    while (array[start] < pivotValue) start = start + 1;
    while (array[end] > pivotValue) end = end - 1;

    if (start <= end) {
      swap(array, start, end);
      start = start + 1;
      end = end - 1;
    }
  }

  return start;
};

const quickSortWithHoare = function (array, start = 0, end = array.length - 1) {
  if (start >= end) return;

  let borderIndex = hoarePartition(array, start, end);
  quickSortWithHoare(array, start, borderIndex - 1);
  quickSortWithHoare(array, borderIndex, end);

  return array;
};

const inputValue = ['5 2', '4 2 5 3'];

console.log(
  quickSortWithHoare(inputValue[1].split(' ').map((item) => Number(item)))[
    inputValue[0].split(' ')[1] - 1
  ]
);
