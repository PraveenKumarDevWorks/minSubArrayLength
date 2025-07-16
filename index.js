const minSubArrayLength = (nums, target) => {
    let left = 0;
    let sum = 0;
    let minLength = Infinity;
    // Iterate through the array with a right pointer
    for (let right = 0; right < nums.length; right++) {
        // Add the current element to the sum
        sum += nums[right];
        // Shrink the window from the left as long as the sum is greater than or equal to target
        while (sum >= target) {
            // Update the minimum length of the subarray
            minLength = Math.min(minLength, right - left + 1);
            // Subtract the leftmost element from the sum and move the left pointer to the right
            sum -= nums[left];
            left++;
        }
    }
    return minLength === Infinity ? 0 : minLength;
}


console.log(minSubArrayLength([2, 3, 1, 2, 4, 3], 7));

// Example usage
console.log(minSubArrayLength([1, 4, 4], 4)); // Output: 1
console.log(minSubArrayLength([1, 1, 1, 1, 1, 1, 1], 11)); // Output: 0
console.log(minSubArrayLength([2, 3, 1, 2, 4, 3], 7)); // Output: 2

// Explanation
// This function finds the minimum length of a contiguous subarray whose sum is greater than or equal to a given target.
// It uses a sliding window approach with two pointers (left and right) to maintain the current subarray.
// The right pointer expands the window by adding elements to the sum, and the left pointer shrinks the window when the sum meets or exceeds the target.
// The function returns the minimum length of such a subarray, or 0 if no such subarray exists.
// Time Complexity: O(n), where n is the length of the input array nums.
// Space Complexity: O(1), as we are using only a few variables for tracking indices and sums.
// // Example usage:
// const nums = [2, 3, 1, 2, 4, 3];
// const target = 7;
// console.log(minSubArrayLength(nums, target)); // Output: 2

// visualization example:
// [2, 3, 1, 2, 4, 3]
// Window size k = 7
// Initial pointers: left = 0, right = 0, sum = 0
// After processing 2: sum = 2, right = 0
// After processing 3: sum = 5, right = 1
// After processing 1: sum = 6, right = 2
// After processing 2: sum = 8, right = 3
// After processing 4: sum = 12, right = 4
// After processing 3: sum = 15, right = 5
// The minimum length subarray with sum >= 7 is [4, 3] with length 2.
// The function returns 2 as the minimum length of the subarray with sum >= 7.