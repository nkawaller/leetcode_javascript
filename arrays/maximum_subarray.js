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
