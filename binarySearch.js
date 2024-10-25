const sortedInventory = [10, 20, 30, 40, 50, 60, 70];

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if(arr[mid] === target) {
      return `Found ${target}`;
    } else if (arr[mid] < target){
      left = mid + 1;
    } else {
      right = mid - 1;
    }
       
  }
  return `${target} not found`;
};

console.log(binarySearch(sortedInventory, 30));

module.exports = { binarySearch };