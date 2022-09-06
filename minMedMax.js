const { template } = require("@babel/core");

function minMedMax(n1, n2, n3) {
  let arr = [n1, n2, n3];
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return { min: arr[0], mid: arr[1], max: arr[2] };
}
module.exports = minMedMax;
