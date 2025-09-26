// Knapsack DP
function knapsackDP(tasks, capacity) {
  const n = tasks.length;
  const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    const { weight, value } = tasks[i - 1];
    for (let w = 0; w <= capacity; w++) {
      dp[i][w] = (weight <= w) ? Math.max(dp[i - 1][w], dp[i - 1][w - weight] + value) : dp[i - 1][w];
    }
  }

  // Find selected tasks
  let w = capacity;
  const selectedTasks = [];
  for (let i = n; i > 0; i--) {
    if (dp[i][w] !== dp[i - 1][w]) {
      selectedTasks.push(tasks[i - 1]);
      w -= tasks[i - 1].weight;
    }
  }

  return { maxValue: dp[n][capacity], selectedTasks };
}

// Greedy
function greedyAlgo(tasks, capacity) {
  // Sort tasks by value/weight ratio in descending order
  const sortedTasks = [...tasks].sort((a, b) => (b.value / b.weight) - (a.value / a.weight));
  
  let totalValue = 0;
  let remaining = capacity;
  const selectedTasks = [];

  for (const task of sortedTasks) {
    if (task.weight <= remaining) {
      selectedTasks.push(task);       // pick whole task only
      totalValue += task.value;
      remaining -= task.weight;
    }
    
  }

  return { maxValue: totalValue, selectedTasks };
}


module.exports = { knapsackDP, greedyAlgo };


