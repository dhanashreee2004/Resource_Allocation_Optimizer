const express = require('express');
const router = express.Router();
const { knapsackDP, greedyAlgo } = require('./algorithms');

// Home page
router.get('/', (req, res) => {
    res.render('index');
});

// Handle form submission
router.post('/optimize', (req, res) => {
    // Parse tasks and capacity as numbers
    let tasks=req.body.tasks;
    if (!Array.isArray(tasks)) {
    tasks = [tasks]; // wrap single task into array
    }
    tasks = req.body.tasks.map(task => ({
    name: task.name,
    weight: Number(task.weight),   // numeric parsing
    value: Number(task.value),     // numeric parsing
    extra: task.extra || ""
    }));

    const capacity = parseFloat(req.body.capacity);

    // Knapsack DP calculation
    const knapsackResult = knapsackDP(tasks, capacity);

    // Greedy calculation
    const greedyResult = greedyAlgo(tasks, capacity);

    // Render results page 
    res.render('result', {
        knapsackDP: knapsackResult,
        greedyAlgo: greedyResult
    });
});

module.exports = router;






