## 🧩 Pattern: Sliding Window (Minimum Size Subarray Sum)

**Problem:**  
Given an array of positive integers `nums` and an integer `target`, return the **minimal length** of a contiguous subarray of which the sum is **greater than or equal to** `target`. If no such subarray exists, return `0`.

---

### ✅ Pattern Details

- **Name:** Minimum Size Subarray Sum  
- **Difficulty:** Medium  
- **Tags:** `Array`, `Sliding Window`, `Two Pointers`  
- **Language:** JavaScript  

---

### 🧠 Approach

- Use a **sliding window** strategy with two pointers:
  - Expand the right end of the window to increase the sum.
  - Shrink the left end to minimize the window while keeping the sum ≥ target.
- Keep track of the **minimum window length** found.

---

### 📎 Code Snippet (JavaScript)

```js
const minSubArrayLength = (nums, target) => {
    let left = 0;
    let sum = 0;
    let minLength = Infinity;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        while (sum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
};
