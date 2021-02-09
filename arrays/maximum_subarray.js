// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

 
// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.


/*
 * @param {number[]} nums
 * @return {number}
 */
    

const maxSubArray = (nums) => {
	let maxSum = -Infinity
	let currentSum = 0
	for (let i = 0; i < nums.length; i++) {
		currentSum = Math.max(nums[i], currentSum + nums[i])
		maxSum = Math.max(currentSum, maxSum)
	}
	return maxSum
}

let a = [1,2,3,-4,5]
console.log(maxSubArray(a))
