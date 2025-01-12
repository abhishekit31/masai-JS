function findMaxDept(array) {
  let depth = 0;

  if (Array.isArray(array)) {
    for (let i = 0; i < array.length; i++) {
      depth = Math.max(depth, findMaxDept(array[i]));
    }
    depth += 1;
  }
  return depth;
}
let arr = [1, [2, [3, [4]]], [5]];
console.log(findMaxDept(arr));
