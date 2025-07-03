# Space Complexity

Space Complexity quantifies the amount of memory an algorithm uses with respect to input size.

## Main components of Space Complexity

- **Auxiliary Space**: This refers to the extra space or temporary space used by the algorithm apart from input data like data structures, function call stacks, variables etc..
- **Input Size**: It's the memory occupied by the input data itself.

:::note Let's understand the concept
Consider an array of **N** elements. Then in this case the space complexity will be **O(N)** as the input size increases linearly.

For Recursive function the complexity is determined by the function call stack. which grows with the depth of the recursion. So if the function calls itself **N** times then the space complexity will be **O(N)**
:::

## Conclusion

Understanding both Time & Space complexity is fundamental to evaluate & optimise algorithm

Time complexity provides insights into how the execution time of an algorithm grows with input size. While space complexity measures the memory usage.

:::note
By Analyzing these complexities one can choose the most efficient algorithm for a given problem ensuring that both time & resource are used effectively.
