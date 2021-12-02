function filterRange(arr, a, b) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= a && arr[i] <= b) {
          newArr.push(arr[i]);
      }
  }
  return newArr;
}
