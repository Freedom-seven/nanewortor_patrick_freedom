// const arr = [10, 450, 55, 600, 110, 1500, 900, 1000, 225]
​
const secondLargestNum = (arr) => {
  let largest = 0;
  let secondLargest = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], largest);
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
​
module.exports = secondLargestNum;