/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let arr = nums1.concat(nums2).sort((a,b) => a-b), len = arr.length;
  if (len % 2 === 0) return ((arr[len/2] + arr[len/2-1]) / 2).toFixed(1);
  else return arr[Math.floor(len/2)].toFixed(1);
};

console.log(findMedianSortedArrays([1, 3], [2,4]))