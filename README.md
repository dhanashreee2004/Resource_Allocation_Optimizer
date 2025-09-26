# Resource Allocation Optimizer

A **web-based Resource Allocation Optimizer** that uses **0/1 Knapsack Dynamic Programming** and **Greedy algorithms** to maximize task value under capacity constraints. The app allows users to input tasks with weights and values, calculates the optimal and approximate task allocation, and visualizes the results with dynamic charts.

---

## Features

- Input multiple tasks with **name, weight, value, and optional extra info**.
- Calculate **optimal task allocation** using **0/1 Knapsack DP**.
- Calculate **approximate allocation** using **Greedy algorithm (0/1 version)**.
- Visualize selected tasks and their values using **Chart.js**.
- Handles **numeric parsing** and **edge cases** for accurate results.
- Supports **real-time allocation** for **100+ tasks**.

---

## Technologies Used

- **Backend:** Node.js, Express.js  
- **Frontend:** EJS, HTML, CSS, JavaScript  
- **Charts/Visualization:** Chart.js  
- **Algorithms:** 0/1 Knapsack Dynamic Programming, Greedy (0/1 version)

---

## Numerical Efficiency

- **Dynamic Programming (DP):** 100% optimal solution for all test cases.  
- **Greedy Algorithm:** ~80–85% approximate solution, faster for larger inputs.

---

## Installation & Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/dhanashreee2004/Resource_Allocation_Optimizer.git
